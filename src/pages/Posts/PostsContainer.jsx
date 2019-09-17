import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";
import styles from "./Posts.module.css";
import Posts from "./Posts";
import { getPostsThunk, currentPageAC } from "../../redux/action/postsAction";
import {
  getAllPosts,
  getCurrentPage
} from "../../redux/selectors/postsSelectots";

class PostsContainer extends React.Component {
  state = {};
  componentDidMount() {
    this.props.getPostsThunk();
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <Header className={styles.header} />
        <div className={styles.main}>
          <Posts
            posts={this.props.posts}
            currentPage={this.props.currentPage}
            currentPageAC={this.props.currentPageAC}
          />
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
  { getPostsThunk, currentPageAC }
)(PostsContainer);
