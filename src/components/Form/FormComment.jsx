import React from "react";
import { useState } from "react";
import styles from "./AddPost.module.css";
const FormComment = props => {
  const [onMode, setMode] = useState(false);
  const { setComenst, value, onSubmit } = props;
  let onSetMode = () => setMode(!onMode);
  // let onSubmitValid = () => {};
  return (
    <div className={styles.addPost}>
      {!onMode ? (
        <button onClick={onSetMode}>Add comment</button>
      ) : (
        <div>
          <form onSubmit={onSubmit}>
            <div>
              <textarea
                onChange={setComenst}
                value={value}
                placeholder="enter your comment"
                cols="30"
                rows="3"
              />
            </div>
            {/* {this.state.commentValue.length > 10 ? (
          <p className={styles.warning}>
            Comment must be less than 300 characters
          </p>
        ) : null} */}
            <button type="submit">SUBMIT</button>
            <button onClick={onSetMode}>close form comment</button>
          </form>
        </div>
      )}
    </div>
  );
};
export default FormComment;
