import React from 'react'
import {Box, Typography} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";
import CardItem from "./card/"
const Home = () => {
    //   const classes = useStyles();

    return (

        <Box>
        <Typography variant="h3" component="h1">Witaj, znajdujesz się na głównej stronie portalu informacyjnego, zawierającego różne dane publiczne.</Typography>
        <Typography paragraph>Poniżej znajdują się przykladowe zestawy danych, które zdecydowaliśmy się dla ciebie wybrać.</Typography>
     
         <Box  display="flex"
         flexWrap="wrap"
        > 
            <CardItem  title="Terminy leczenia NFZ" href="/terminyleczenia" background={`linear-gradient(to right, #2dc1c9 0%, #2194c1 30%, #252d47 100%)`}/>
            <CardItem title="Rejest zabytków" href="/rejestrzabytkow"  background={`linear-gradient(to right, #e47c64 0%, #e36481 30%, #252d47 100%)`}/>
            <CardItem background={`linear-gradient(to right, #ffba00 0%, #fc9244 30%, #252d47 100%)`}/>
            <CardItem background={`linear-gradient(to right, #7a79fe 0%, #a758f5 30%, #252d47 100%)`}/>
        </Box>
       
        </Box>
    )
}

{/* const useStyles = makeStyles({
    // backGround:{
    //         backgroundImage: `linear-gradient(rgba(30,37,58), rgba(30,37,58)), url('/background.jpg')`,
    //         backgroundPosition: "0px 0px, 50% 50%",
    //         backgroundSize: "auto, cover",
    //         height: "100vh",
    // }
}) */}

export default Home
