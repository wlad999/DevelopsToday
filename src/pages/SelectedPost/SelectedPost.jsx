import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Selected.module.css";
import FormComment from "../../components/Form/FormComment";
import Comments from "../../components/Comments/Comments";
import RetrievePost from "../../components/RetrievePost/RetrievePost";
import Alternative from "./Alternative";
import {
  getComentsThunk,
  delPostAC,
  setComentsThunk,
  delPostThunk,
  delCommentsThunk,
  updatePostThunk
} from "../../redux/action/postsAction";
import { connect } from "react-redux";
import {
  getDataPost,
  getComments,
  getPostId
} from "../../redux/selectors/postsSelectots";

class SelectedPost extends React.Component {
  state = {
    commentValue: "",
    warning: ""
  };

  setComenst = e => {
    this.setState({ commentValue: e.target.value });
    setTimeout(() => {
      if (this.state.commentValue.length > 10) {
        this.setState({ warning: "Comment must be less than 10 characters" });
      } else {
        this.setState({ warning: "" });
      }
    }, 10);
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.commentValue && this.state.commentValue.length <= 10) {
      this.props.setComentsThunk({
        postId: Number(this.props.match.params.id),
        body: this.state.commentValue
      });
      this.setState({ commentValue: "" });
      this.setState({ warning: "" });
    } else if (!this.state.commentValue) {
      setTimeout(() => {
        this.setState({ warning: "Comment can't be empty" });
        console.log("state", this.state);
      }, 10);
    }
  };

  componentDidMount() {
    this.props.getComentsThunk(this.props.match.params.id);
  }
  componentDidUpdate() {}

  componentWillUnmount() {
    this.props.delPostAC();
  }
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        {this.props.dataPost ? (
          <div className={styles.main}>
            <RetrievePost
              dataPost={this.props.dataPost}
              delPostThunk={this.props.delPostThunk}
              updatePostThunk={this.props.updatePostThunk}
              id={this.props.postId}
            />
            <Comments
              comments={this.props.comments}
              updateCommentThunk={this.props.updateCommentThunk}
              delCommentsThunk={this.props.delCommentsThunk}
              postId={this.props.postId}
            />
          </div>
        ) : (
          <Alternative />
        )}
        {this.props.dataPost && (
          <FormComment
            className={styles.form}
            setComenst={this.setComenst}
            value={this.state.commentValue}
            onSubmit={this.onSubmit}
          />
        )}
        {this.state.warning ? (
          <p className={styles.warning}>{this.state.warning}</p>
        ) : null}
        <Footer />
      </div>
    );
  }
}

const MSTP = state => ({
  dataPost: getDataPost(state),
  comments: getComments(state),
  postId: getPostId(state)
});

export default connect(
  MSTP,
  {
    getComentsThunk,
    delPostAC,
    setComentsThunk,
    delPostThunk,
    delCommentsThunk,
    updatePostThunk
  }
)(SelectedPost);
