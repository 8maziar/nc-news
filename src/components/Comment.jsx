import { BsHandThumbsUpFill } from "react-icons/bs";

const Comment = ({comment}) => {
  const { author, body, votes, created_at } = comment;

  return (
    <article className="comment">
      <p>
        <strong>{author}</strong> : {body}
      </p>
      <p className="comment-votes">
        <span>
          <BsHandThumbsUpFill />
          {votes}
        </span>
        <span>{created_at.slice(0, 10)}</span>
      </p>
    </article>
  );
};
export default Comment;
