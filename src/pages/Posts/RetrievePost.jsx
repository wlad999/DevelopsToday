import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Posts.module.css";

const RetrievePost = props => {
  let [editModeTitle, setEditModeTitle] = useState(false);
  let [editModeBody, setEditModeBody] = useState(false);
  let [title, setTitle] = useState(props.dataPost.title);
  let [body, setBody] = useState(props.dataPost.body);

  const { dataPost, delPostThunk, updatePostThunk, id } = props;

  useEffect(() => {
    setTitle(dataPost.title);
  }, [dataPost.title]);
  useEffect(() => {
    setBody(dataPost.body);
  }, [dataPost.body]);

  let activateModeTitle = () => {
    setEditModeTitle(true);
  };
  let activateModeBody = () => {
    setEditModeBody(true);
  };
  const deactivateEditModeTitle = () => {
    setEditModeTitle(false);
    updatePostThunk(id, {
      title: title,
      body: body
    });
  };
  const deactivateEditModeBody = () => {
    setEditModeBody(false);
    updatePostThunk(id, {
      title: title,
      body: body
    });
  };
  let onTitleChange = e => {
    setTitle(e.target.value);
  };
  let onBodyChange = e => {
    setBody(e.target.value);
  };

  return (
    <div className={styles.main}>
      <div onDoubleClick={activateModeTitle}>
        {!editModeTitle && (<p>TITLE: {dataPost.title}</p> || "NO TITLE")}
      </div>
      {editModeTitle && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditModeTitle}
            onChange={onTitleChange}
            value={title}
          />
        </div>
      )}
      <p>POST ID: {dataPost.id}</p>
      <div onDoubleClick={activateModeBody}>
        {!editModeBody && (<p>POST: {dataPost.body}</p> || "NO POST BODY")}
      </div>
      {editModeBody && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditModeBody}
            onChange={onBodyChange}
            value={body}
          />
        </div>
      )}
      {dataPost.author && <p>AUTOR: {dataPost.author}</p>}
      {dataPost.date && <p>DATA:{dataPost.date}</p>}
      <NavLink className={styles.nav} to={`/`}>
        <button onClick={() => delPostThunk(dataPost.id)}>DELETE POST</button>
      </NavLink>
    </div>
  );
};

export default RetrievePost;
