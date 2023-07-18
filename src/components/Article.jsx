const Article = ({ article }) => {
  const { article_img_url, author, comment_count, title, topic, votes } = article;
  return (
    <article>
      <img src={article_img_url} alt="article-image" />
      <h5>{title}</h5>
      <div>
        <p>{author}</p>
        <p>{topic}</p>
      </div>
      <div>
        <p>{comment_count}</p>
        <p>{votes}</p>
      </div>
    </article>
  );
};
export default Article;
