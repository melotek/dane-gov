import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";



const CardItem = ({background}) => {
      const classes = useStyles();
    return (
        <Box className={classes.backgroundLayer}
        style={{backgroundImage: background }}
        >
            
        </Box>
    )
}
const useStyles = makeStyles({
backgroundLayer:{
//     backgroundImage:  background,
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
