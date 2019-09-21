import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Posts.module.css";
import FormComment from "../../components/Form/FormComment";
// import UpdatePost from "../../components/Form/UpdatePost";
import Comments from "./Comments";
import RetrievePost from "./RetrievePost";
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

class SelectPost extends React.Component {
  state = {
    value: ""
  };

  setComenst = e => {
    this.setState({ value: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.setComentsThunk({
      postId: Number(this.props.match.params.id),
      body: this.state.value
    });
    this.setState({ value: "" });
  };

  componentDidMount() {
    this.props.getComentsThunk(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.delPostAC();
    console.log(this.props);
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
            {/* <UpdatePost
              updatePostThunk={this.props.updatePostThunk}
              id={this.props.postId}
            /> */}
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
            setComenst={this.setComenst}
            value={this.state.value}
            onSubmit={this.onSubmit}
          />
        )}
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
)(SelectPost);
