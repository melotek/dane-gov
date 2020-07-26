import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";



const CardItem = () => {
      const classes = useStyles();

    return (
        <Box className={classes.backgroundLayer}>
            dsadasdas
            <img src="/medical.svg" alt="" className={classes.backgroundIcon}/>
        </Box>
    )
}
const useStyles = makeStyles({
backgroundLayer:{
    backgroundImage:  `linear-gradient(to right, #2dc1c9 0%, #2194c1 30%, #252d47 100%)`,
    width: 420,
    height: 210,
    position: "relative"
    },
backgroundIcon: {
    position: "absolute",
    left: 0,
    
    height: "63%",
   
}
});
export default CardItem
