import React from "react";
import styles from "./AddPost.module.css";

import { useState, useEffect } from "react";
const AddPost = props => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [warning, setWarning] = useState("");

  const onTitleChange = e => {
    if (e.target.value.length > 10) {
      setWarning("Title must be less than 10 characters");
    } else {
      setWarning("");
    }
    setTitle(e.target.value);
  };
  const onBodyChange = e => {
    if (e.target.value.length > 20) {
      setWarning("Title must be less than 20 characters");
    } else {
      setWarning("");
    }
    setBody(e.target.value);
  };

  let onSubmit = e => {
    e.preventDefault();
    if (title || body) {
      props.putPostThunk({
        title: title,
        body: body
      });
      setTitle("");
      setBody("");
    } else {
      setWarning("Post can`t be empty");
    }
  };
  return (
    <div className={styles.addPost}>
      <form onSubmit={onSubmit}>
        <div>
          <div>
            <p>title:</p>
            <input
              type="text"
              value={title}
              onChange={onTitleChange}
              placeholder="enter title"
            />
          </div>
          <p>body:</p>
          <textarea
            onChange={onBodyChange}
            value={body}
            placeholder="enter your post"
            cols="30"
            rows="3"
          />
        </div>
        {warning && <p className={styles.warning}>{warning}</p>}
        <button type="submit">SUBMIT</button>
        <button onClick={props.onCloseForm}>close form</button>
      </form>
    </div>
  );
};
export default AddPost;
