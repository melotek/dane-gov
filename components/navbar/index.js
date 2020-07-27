import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Container,
  Box,
  IconButton,
  InputAdornment,
} from "@material-ui/core";
import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
const NavBar = (props) => {
  const [filterByCity, setfilterByCity] = useState("");
  const router = useRouter();

  const searchHandler = (event) => {
    setfilterByCity(event.currentTarget.value);
  };

  const routeToPath = () => {
    router.push({
      pathname: "/administracja/miasto/[city]",
      query: { city: `${filterByCity}` },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.navWrapper}>
      <Box display="flex" className={classes.navContainer}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.toggleOnHandler}
          edge="start"
          style={{ padding: "12px 24px;" }}
        >
          <MenuIcon style={{ color: "rgb(218,219,222)" }} />
        </IconButton>
        {/* <form onSubmit={handleSubmit}>
          <Box
            style={{
              height: "calc(100% + 3px)",
              backgroundColor: "rgb(30,37,58)",
            }}
          >
            <TextField
              id="filled-basic"
              label="Szukaj"
              variant="filled"
              name="city"
              type="text"
              className={classes.searchBarStyle}
              value={filterByCity}
              onChange={searchHandler}
              autoComplete="off"
              inputProps={{
                style: {
                  color: "rgb(218,219,222)",
                  padding: "20px 60px 20px 20px ",
                },
              }}
              InputLabelProps={{
                style: {
                  color: "rgb(218,219,222)",
                },
              }}
            />
            <IconButton
              style={{
                color: "rgb(218,219,222)",
                padding: 18,
              }}
              type="submit"
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          </Box>
        </form> */}
      </Box>
    </Container>
  );
};

export default NavBar;

const useStyles = makeStyles((theme) => ({
  navWrapper: {
    backgroundColor: theme.palette.primary.complementaBg,
    padding: "0",
    boxShadow: "0 2px 5px 0px rgba(0,0,0,0.1)",
  },
  navContainer: {
    position: "relative",
    left: 360,
    width: "calc(100vw - 380px)",
  },
  MuiFormLabelRoot: {
    color: `${theme.palette.primary.primaryText}`,
  },
  searchBarStyle: { backgroundColor: "transparent !important" },
}));
