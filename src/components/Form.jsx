import { useState } from "react";
import { postComment } from "../api";

const Form = ({ single_article, setNewComment }) => {
  const [comment, setComment] = useState("");
  const [err, setErr] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    postComment(single_article, comment)
      .then((res) => {
        setNewComment(res);
      })
      .catch(() => {
        setErr(true);
        setTimeout(() => {
          setErr(false);
        }, 700);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="comment">Comment : </label>
      <textarea name="comment" required placeholder="post your comment..." id="comment" cols="30" rows="10" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
      <button type="submit">Post</button>
      {err && <p>something went wrong!</p>}
    </form>
  );
};
export default Form;
