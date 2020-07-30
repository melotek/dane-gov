import React from "react";
import Link from "next/link";
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
  Box,
  Badge,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SubjectIcon from "@material-ui/icons/Subject";
import { merge } from "lodash";
import { useRouter } from "next/router";
import SearchBar from "components/searchbar";

const RenderDataLinks = () => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const Links = [
    {
      text: "Administracja rządowa",
      link: "state",
      count: 93,
    },
    {
      text: "Administracja samorządowa",
      link: "local",
      count: 45,
    },
  ];

  return (
    <>
      {Links.map((i, index) => (
        <ListItem
          button
          key={i.text}
          className={router.pathname === i.link ? classes.selected : ""}
        >
          {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}

          <Link as={`/${i.link}`} href="/[administracja]">
            <a className={classes.link}>
              {" "}
              <Typography variant="overline" display="block" gutterBottom>
                {i.text}{" "}
              </Typography>
            </a>
          </Link>
          <Box ml={2}>
            <Badge badgeContent={`${i.count}`} color="primary">
              <SubjectIcon />
            </Badge>
          </Box>
        </ListItem>
      ))}
    </>
  );
};

const SideBar = (props) => {
  const { data } = props;

  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();

  return (
    <>
      {" "}
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.drawerOpen}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Divider />
        <Box width="100%" alignSelf="center">
          <Box mt={4} mb={4}>
            <List>
              <Box ml={2} my={2}>
                <Typography variant="h6" display="block" gutterBottom>
                  Administracja
                </Typography>
              </Box>
              <RenderDataLinks />
            </List>
          </Box>
          <Divider />
          <Box mt={4} mb={4}>
            <Box ml={2} my={2}>
              <Typography variant="h6" display="block" gutterBottom>
                Terminy NFZ
              </Typography>
            </Box>
            <Box ml={2}>
              <SearchBar
                display="flex"
                flexDirection="column"
                width="calc(100% - 16px)"
                height="280px"
                justifyContent="space-between"
              />
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.complementaBg,
    color: theme.palette.primary.primaryText,
    whiteSpace: "nowrap",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  link: {
    color: theme.palette.primary.secondaryText,
    textDecoration: "none",
  },
  selected: {
    background: "linear-gradient(to right, #2ec7cb 0%, #6c8bef 100%)",
  },
}));

export default SideBar;
