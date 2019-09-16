import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Posts.module.css";
import {
  getComentsThunk,
  delPostAC,
  delComentsAC
} from "../../redux/reducers/postsReducer";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class SelectPost extends React.Component {
  state = {};
  componentDidMount() {
    this.props.getComentsThunk(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.delPostAC();
    this.props.delComentsAC();
  }
  render() {
    console.log("this.props", this.props);
    return (
      <div className={styles.wrapper}>
        <Header />
        {this.props.selectedPost ? (
          <div className={styles.main}>
            <p>TITLE: {this.props.selectedPost.title}</p>
            <p>USER ID: {this.props.selectedPost.id}</p>
            <p>POST: {this.props.selectedPost.body}</p>
            <p>AUTOR: {this.props.selectedPost.author}</p>
            {this.props.selectedPost.data && (
              <p>DATA: {this.props.selectedPost.data}</p>
            )}
            <p>COMENTS:</p>
            {this.props.coments && this.props.coments.length > 0 ? (
              <div className={styles.list}>
                {this.props.coments.map(com => (
                  <div key={com.id}>
                    <div>id: {com.id}</div>
                    <div className={styles.com}>body: {com.body}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p>NO Coments</p>
            )}
          </div>
        ) : (
          <NavLink className={styles.mainEmpty} to={"/"}>
            What are you waiting for??? - click on something !!!
          </NavLink>
        )}
        <Footer />
      </div>
    );
  }
}

const MSTP = state => ({
  selectedPost: state.postsPage.selectedPost,
  coments: state.postsPage.coments
});

export default connect(
  MSTP,
  { getComentsThunk, delPostAC, delComentsAC }
)(SelectPost);
