import { useNavigate } from "react-router-dom";
import { BsFillPersonFill, BsFillBookFill, BsFillChatDotsFill, BsHandThumbsUpFill } from "react-icons/bs";

const Article = ({ article }) => {
  const { article_img_url, author, comment_count, title, topic, votes } = article;

  const navigate = useNavigate()

function showSingleArticle(){
  navigate(`/articles/${article.article_id}`);
}

  return (
    <article>
      <img src={article_img_url} alt="article-image" onClick={showSingleArticle}/>
      <h5>{title}</h5>
      <section>
        <p><BsFillPersonFill/>{author}</p>
        <p><BsFillBookFill/>{topic}</p>
      </section>
      <section>
        <p><BsFillChatDotsFill/>{comment_count}</p>
        <p><BsHandThumbsUpFill/>{votes}</p>
      </section>
      <button onClick={showSingleArticle}>More</button>
    </article>
  );
};
export default Article;
