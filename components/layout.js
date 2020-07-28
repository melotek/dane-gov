import Link from "next/link";
import Head from "next/head";
import Navber from "./navbar/";
import SideBar from "./drawer/";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import clsx from "clsx";

const Layout = (props) => {
  const { data } = props;
  const classes = useStyles();
  const { title, children } = props;
  const { drawerOpen, toggleOnHandler } = useDrawerToggler();
  return (
    <Container maxWidth={false} className={classes.pageContainer}>
      <header>
        <nav>
          <Navber toggleOnHandler={toggleOnHandler} />
        </nav>
      </header>
      <Box display="flex">
        <SideBar data={data} drawerOpen={drawerOpen} />
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: drawerOpen,
          })}
        >
          {children}
        </main>
      </Box>
      <footer></footer>
    </Container>
  );
};

export default Layout;
const useStyles = makeStyles((theme) => ({
  pageContainer: {
    backgroundColor: theme.palette.primary.main,
    padding: 0,
   
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -360,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
const useDrawerToggler = () => {
  const drawerOpen = useSelector((state) => state.drawerOpen);
  const dispatch = useDispatch();
  const toggleOnHandler = (drawerOpen) =>
    dispatch({
      type: "TOGGLE_DRAWER",
    });
  return {
    drawerOpen,
    toggleOnHandler,
  };
};
