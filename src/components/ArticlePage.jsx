import { useState, useEffect } from "react";
import { getArticle } from "../api";
import { useParams } from "react-router-dom";
import loadImg from "../assets/loading.png";

const ArticlePage = () => {
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const { article_img_url, author, comment_count, title, topic, votes, body } = article;

  const { single_article } = useParams();

  useEffect(() => {
    getArticle(single_article).then((res) => {
      setArticle(res);
      setLoading(false)
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
            <p>Author: {author}</p>
            <p>Topic: {topic}</p>
            <p>{body}</p>
          </section>
          <section>
            <p>Comments:{comment_count}</p>
            <p>Likes:{votes}</p>
          </section>
        </article>
      </section>
    </main>
  );
};
export default ArticlePage;
