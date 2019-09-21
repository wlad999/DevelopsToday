import React from "react";
import styles from "./Posts.module.css";

const Comments = props => {
  const { comments, delCommentsThunk, postId } = props;
  let reverseComments = comments.map(el => el).reverse();
  return (
    <div>
      <p>COMMENTS:</p>
      {comments && comments.length > 0 ? (
        <div className={styles.scroll}>
          {reverseComments.map(com => (
            <div key={com.id}>
              <div>id: {com.id}</div>
              <div className={styles.com}>body:{com.body}</div>
              <button onClick={() => delCommentsThunk(com.id, postId)}>
                X
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>NO Coments</p>
      )}
    </div>
  );
};

export default Comments;