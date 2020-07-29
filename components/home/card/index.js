import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
import Link from "next/link";
const CardItem = ({ background, title, href }) => {
  const classes = useStyles();
  return (
    <Box
      m={4}
      className={classes.backgroundLayer}
      style={{ backgroundImage: background }}
    >
      <Box display="flex" justifyContent="center">
        <Typography gutterBottom variant="h5" component="h2">
          <Link href={`${href}`}>
            <a> {title}</a>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
const useStyles = makeStyles({
  backgroundLayer: {
    //     backgroundImage:  background,
    width: 420,
    height: 210,
    position: "relative",
  },
  backgroundIcon: {
    position: "absolute",
    left: 0,

    height: "63%",
  },
});
export default CardItem;
