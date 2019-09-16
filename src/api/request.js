import * as Axios from "axios";
import * as api from "./api";

export const getPostsRequest = () => {
  return Axios.get(api.url.posts())
    .then(resp => {
      // console.log(resp);
      if (resp.status !== 200) {
        throw new Error("ERROR");
      }
      return resp;
    })
    .catch(error => console.log(error));
};
export const getComentsRequest = id => {
  return Axios.get(api.url.selectedComents(id))
    .then(resp => {
      console.log(resp);
      if (resp.status !== 200) {
        throw new Error("ERROR");
      }
      return resp;
    })
    .catch(error => console.log(error));
};
