import { React, useCallback } from "react";
import { Container, Fab } from "@material-ui/core";
import Header from "../components/Header";
import AddIcon from "@material-ui/icons/Add";
import PostList from "../components/PostList";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";
import CreatePostModal from "../components/CreatePostModal";

export default function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openCreatePostModal = useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Header></Header>
      <PostList></PostList>
      <CreatePostModal />

      <Fab
        color="primary"
        className={classes.fab}
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}
