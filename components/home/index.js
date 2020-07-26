import React from 'react'
import {Box} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import CardItem from "./card/"
const Home = () => {
      const classes = useStyles();

    return (
        <Box
          backgroundColor="rgb(30,37,58)"
          className={classes.backGround}
        > 
            <CardItem/>
        </Box>
    )
}

const useStyles = makeStyles({
    backGround:{
            backgroundImage: `linear-gradient(rgba(30,37,58), rgba(30,37,58)), url('/background.jpg')`,
            backgroundPosition: "0px 0px, 50% 50%",
            backgroundSize: "auto, cover",
            height: "100vh",
    }
})

export default Home
