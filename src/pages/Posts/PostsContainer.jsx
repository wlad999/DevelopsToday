import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AddPost from "../../components/Form/AddPost";
import { connect } from "react-redux";
import styles from "./Posts.module.css";
import Posts from "./Posts";
import {
  getPostsThunk,
  currentPageAC,
  putPostThunk,
  delPostThunk
} from "../../redux/action/postsAction";
import {
  getAllPosts,
  getCurrentPage
} from "../../redux/selectors/postsSelectots";

class PostsContainer extends React.Component {
  state = {
    addPost: false
  };
  componentDidMount() {
    this.props.getPostsThunk();
  }
  onCloseForm = () => {
    this.setState({ addPost: false });
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Header className={styles.header} />
        <div className={styles.main}>
          <Posts
            posts={this.props.posts}
            delPostThunk={this.props.delPostThunk}
            currentPage={this.props.currentPage}
            currentPageAC={this.props.currentPageAC}
            onCloseForm={this.onCloseForm}
          />
        </div>
        <div>
          {!this.state.addPost ? (
            <button
              onClick={() => {
                this.setState({ addPost: true });
              }}
            >
              write post
            </button>
          ) : (
            <AddPost
              onCloseForm={this.onCloseForm}
              putPostThunk={this.props.putPostThunk}
            />
          )}
        </div>
        <Footer className={styles.footer} />
      </div>
    );
  }
}
let MSTP = state => ({
  posts: getAllPosts(state),
  currentPage: getCurrentPage(state)
});

export default connect(
  MSTP,
  { getPostsThunk, currentPageAC, putPostThunk, delPostThunk }
)(PostsContainer);
