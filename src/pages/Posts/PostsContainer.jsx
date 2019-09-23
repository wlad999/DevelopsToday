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
    const {
      posts,
      delPostThunk,
      currentPage,
      currentPageAC,
      putPostThunk
    } = this.props;
    return (
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.main}>
          <Posts
            posts={posts}
            delPostThunk={delPostThunk}
            currentPage={currentPage}
            currentPageAC={currentPageAC}
          />
        </div>
        <div>
          {!this.state.addPost ? (
            <button
              className={styles.but}
              onClick={() => {
                this.setState({ addPost: true });
              }}
            >
              add post
            </button>
          ) : (
            <AddPost
              onCloseForm={this.onCloseForm}
              putPostThunk={putPostThunk}
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
