import { useState,useEffect } from "react";
import { getArticle } from "../api";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
    const [article,setArticle] =useState({})
     const { article_img_url, author, comment_count, title, topic, votes } = article;

     const { single_article } = useParams();

     useEffect(() => {
       getArticle(single_article).then((res) => {
         setArticle(res);
       });
     }, []);

  return (
    <main className="article-page">
      <section>
        <article className="single-article">
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
        </article>
      </section>
    </main>
  );
}
export default ArticlePage