import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Posts.module.css";
import Form from "../../components/Form/Form";
import Comments from "./Comments";
import RetrievePost from "./RetrievePost";
import {
  getComentsThunk,
  delPostAC,
  setComentsThunk
} from "../../redux/action/postsAction";
import { connect } from "react-redux";
import { getDataPost, getComments } from "../../redux/selectors/postsSelectots";

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
        <div className={styles.main}>
          <RetrievePost
            dataPost={this.props.dataPost}
            comments={this.props.comments}
          />
          <Comments comments={this.props.comments} />
          <Form
            className={styles.main}
            setComenst={this.setComenst}
            value={this.state.value}
            onSubmit={this.onSubmit}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

const MSTP = state => ({
  dataPost: getDataPost(state),
  comments: getComments(state)
});

export default connect(
  MSTP,
  {
    getComentsThunk,
    delPostAC,
    setComentsThunk
  }
)(SelectPost);
