import { useNavigate } from "react-router-dom";
import { getArticle } from "../api";

const Article = ({ article }) => {
  const { article_img_url, author, comment_count, title, topic, votes } = article;

  const navigate = useNavigate()

function showSingleArticle(){
  navigate(`/articles/${article.article_id}`);
}

  return (
    <article>
      <img src={article_img_url} alt="article-image" />
      <h5>{title}</h5>
      <section>
        <p>{author}</p>
        <p>{topic}</p>
      </section>
      <section>
        <p>{comment_count}</p>
        <p>{votes}</p>
      </section>
      <button onClick={showSingleArticle}>More</button>
    </article>
  );
};
export default Article;
