import { useEffect, useState } from "react";
import { getArticles } from "../api";
import Article from "./Article";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data);
    });
  }, []);

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
