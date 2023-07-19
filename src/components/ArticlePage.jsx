import { useState, useEffect } from "react";
import { getArticle, getcommentsById } from "../api";
import { useParams } from "react-router-dom";
import loadImg from "../assets/loading.png";
import { BsFillPersonFill, BsFillBookFill, BsFillChatDotsFill, BsHandThumbsUpFill } from "react-icons/bs";
import Comment from "./Comment";

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { article_img_url, author, comment_count, title, topic, votes, body } = article;

  const { single_article } = useParams();

  useEffect(() => {
    getArticle(single_article).then((res) => {
      setArticle(res);
      setLoading(false);
    });

    getcommentsById(single_article).then((res) => {
      setComments(res);
    });
  }, []);

  if (loading) return <img src={loadImg} alt="loading" />;

  return (
    <main className="article-page">
      <section>
        <article className="single-article">
          <img src={article_img_url} alt="article-image" />
          <h5>{title}</h5>
          <section>
            <p>
              <BsFillPersonFill />
              {author}
            </p>
            <p>
              <BsFillBookFill />
              {topic}
            </p>
            <p>{body}</p>
          </section>
          <section>
            <p>
              <BsFillChatDotsFill />
              {comment_count}
            </p>
            <p>
              <BsHandThumbsUpFill />
              {votes}
            </p>
          </section>
        </article>
      </section>
      <section className="comment-box">
        {comments.map((comment) => {
          return <Comment key={comment.comment_id} comment={comment}/>;
        })}
      </section>
    </main>
  );
};
export default ArticlePage;
