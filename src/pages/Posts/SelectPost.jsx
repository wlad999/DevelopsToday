import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Posts.module.css";
import Form from "../../components/Form";
import {
  getComentsThunk,
  delPostAC,
  setComentsThunk
} from "../../redux/reducers/postsReducer";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class SelectPost extends React.Component {
  state = {
    value: ""
  };

  setComenst = e => {
    this.setState({ value: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    // console.log(this.state.value);
    this.props.setComentsThunk({
      postId: this.props.match.params.id,
      body: this.state.value
    });
    this.setState({ value: "" });
  };

  componentDidMount() {
    this.props.getComentsThunk(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.delPostAC();
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        {this.props.dataPost ? (
          <div className={styles.main}>
            <p>TITLE: {this.props.dataPost.title}</p>
            <p>USER ID: {this.props.dataPost.id}</p>
            <p>POST: {this.props.dataPost.body}</p>
            <p>AUTOR: {this.props.dataPost.author}</p>
            {this.props.dataPost.data && (
              <p>DATA: {this.props.dataPost.date}</p>
            )}
            <p>COMENTS:</p>
            {this.props.dataPost.comments &&
            this.props.dataPost.comments.length > 0 ? (
              <div className={styles.list}>
                {this.props.dataPost.comments.map(com => (
                  <div key={com.id}>
                    <div>id: {com.id}</div>
                    <div className={styles.com}>body: {com.body}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p>NO Coments</p>
            )}
            <Form
              setComenst={this.setComenst}
              value={this.state.value}
              onSubmit={this.onSubmit}
            />
            {/* <form>
              <div>
                <textarea
                  onChange={this.setComenst}
                  value={this.state.value}
                  placeholder="enter your comment"
                  cols="30"
                  rows="5"
                />
              </div>
              <button onClick={this.onSubmit}>SUBMIT</button>
            </form> */}
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
  dataPost: state.postsPage.dataPost
});

export default connect(
  MSTP,
  {
    getComentsThunk,
    delPostAC,
    setComentsThunk
  }
)(SelectPost);
