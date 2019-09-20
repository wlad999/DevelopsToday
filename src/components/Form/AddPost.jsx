import React from "react";
import { useState, useEffect } from "react";
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
    props.onCloseForm();
  };
  return (
    <div>
      ADD POST
      <button onClick={props.onCloseForm}>close form</button>
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
            rows="5"
          />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};
export default AddPost;
