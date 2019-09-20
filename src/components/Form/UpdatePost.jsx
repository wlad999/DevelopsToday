import React from "react";
import { useState } from "react";
const UpdatePost = props => {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  const onTitleChange = e => setTitle(e.target.value);
  const onBodyChange = e => setBody(e.target.value);
  const { updatePostThunk, id } = props;

  let onSubmit = e => {
    e.preventDefault();
    console.log("ON SUBMIT", id, updatePostThunk);

    updatePostThunk(id, {
      title: title,
      body: body
    });
    setTitle("");
    setBody("");
  };
  return (
    <div>
      Update your post
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
export default UpdatePost;
