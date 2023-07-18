import { useEffect, useState } from "react";
import { getArticles } from "../api";
import Article from "./Article";
import loadImg from '../assets/loading.png'


const Articles = () => {
    const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
      setLoading(false)
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
