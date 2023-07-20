import { useState, useEffect } from "react";
import { getArticle, getcommentsById, updateVotes } from "../api";
import { useParams } from "react-router-dom";
import loadImg from "../assets/loading.png";
import { BsFillPersonFill, BsFillBookFill, BsFillChatDotsFill, BsHandThumbsUpFill, BsHandThumbsDownFill } from "react-icons/bs";
import Comment from "./Comment";
import Form from "./Form";

const ArticlePage = () => {
  const [voteCount, setVoteCount] = useState(0);
  const [article, setArticle] = useState({});
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { article_img_url, author, comment_count, title, topic, body, article_id } = article;

  const { single_article } = useParams();

  useEffect(() => {
    if(newComment) setComments([newComment, ...comments]);
    
  }, [newComment]);

  useEffect(() => {
    getArticle(single_article).then((res) => {
      setArticle(res);
      setLoading(false);
      setVoteCount(res.votes);
    });

    getcommentsById(single_article).then((res) => {
      setComments(res);
    });
  }, []);

  function addVote() {
    setVoteCount((currentCount) => currentCount + 1);
    updateVotes(single_article, 1)
      .then((res) => {})
      .catch(() => {
        setError(true);
        setVoteCount((currentCount) => currentCount - 1);
        setTimeout(() => {
          setError("");
        }, 800);
      });
  }

  function subtractVote() {
    setVoteCount((currentCount) => currentCount - 1);
    updateVotes(single_article, -1)
      .then((res) => {})
      .catch(() => {
        setError(true);
        setVoteCount((currentCount) => currentCount + 1);
        setTimeout(() => {
          setError("");
        }, 800);
      });
  }


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
            <section className="voting">
              <button onClick={addVote} style={{ border: `1px solid ${error ? "red" : "black"}` }}>
                <BsHandThumbsUpFill />
              </button>
              <span>{voteCount}</span>
              <button onClick={subtractVote} style={{ border: `1px solid ${error ? "red" : "black"}` }}>
                <BsHandThumbsDownFill />
              </button>
            </section>
            {error && <p>something went wrong</p>}
          </section>
        </article>
      </section>
      <div>
        <section className="comment-box">
          {comments.map((comment) => {
            return <Comment key={comment.comment_id} comment={comment} />;
          })}
        </section>
        <Form single_article={single_article} setNewComment={setNewComment} />
      </div>
    </main>
  );
};
export default ArticlePage;
