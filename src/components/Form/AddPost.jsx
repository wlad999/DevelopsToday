import React from "react";
import styles from "./AddPost.module.css";

import { useState } from "react";
const AddPost = props => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onTitleChange = e => setTitle(e.target.value);
  const onBodyChange = e => setBody(e.target.value);

  let onSubmit = e => {
    e.preventDefault();
    props.putPostThunk({
      title: title,
      body: body
    });
    setTitle("");
    setBody("");
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
        <button type="submit">SUBMIT</button>
        <button onClick={props.onCloseForm}>close form</button>
      </form>
    </div>
  );
};
export default AddPost;
