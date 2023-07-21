import { useEffect, useState } from "react";
import { getArticles } from "../api";
import Article from "./Article";
import loadImg from "../assets/loading.png";
import { useParams } from "react-router-dom";

const Articles = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  const { topic } = useParams();

  useEffect(() => {
    getArticles().then((data) => {
      if (!topic) {
        setArticles(data);
      } else {
        const filteredArticles = data.filter((article) => article.topic === topic);
        setArticles(filteredArticles);
      }

      setLoading(false);
    });
  }, []);

  if (loading) return <img src={loadImg} alt="loading" />;

  return (
    <main>
      <h1 className="articles-title">List of All Articles</h1>
      <ul className="articles-list">
        {articles.map((article) => {
          return (
            <li key={article.article_id}>
              <Article article={article} />
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default Articles;
