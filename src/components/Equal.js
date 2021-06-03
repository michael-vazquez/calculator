import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery, Button } from "@material-ui/core";

const useStyles = (smallMedia) =>
  makeStyles((theme) => ({
    container: {
      height: "100%",
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
    button: {
      marginTop: theme.spacing(1),
      width: "50%",
      margin: "auto",
      backgroundColor: theme.palette.primary.light,
    },
  }));

function Equal(props) {
  const theme = useTheme();
  const smallMedia = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles(smallMedia)();

  return (
    <div className={classes.container}>
      <Button
        size="medium"
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={props.submit}
      >
        =
      </Button>
    </div>
  );
}

export default Equal;
