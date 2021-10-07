import { makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";

export default makeStyles(() => ({
  loadding: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: " 100px",
    height: " 100px",
  },
}));
