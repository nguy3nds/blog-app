import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";
import { postsState$ } from "../../redux/selectors";
import ReactLoading from "react-loading";
import { mergeClasses } from "@material-ui/styles";
import useStyle from "./styles";

export default function PostList() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);
  console.log("[postlist - posts]", posts);

  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  return (
    <Grid container spacing={2} alignItems="stretch">
      {posts.length !== 0 ? (
        posts.map((post) => (
          <Grid item xs={12} sm={6}>
            <Post post={post} key={post._id} />
          </Grid>
        ))
      ) : (
        <ReactLoading
          type="spin"
          color="#4050B5"
          height={"50px"}
          width={"50px"}
          className={classes.loadding}
        />
      )}
    </Grid>
  );
}
