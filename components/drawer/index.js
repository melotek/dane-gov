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

const RenderDataLinks = () => {
  const classes = useStyles();
  const theme = useTheme();
  const router = useRouter();
  const Links = [
    {
      text: "Administracja rządowa",
      link: "/administracja/rzadowa",
      count: 93,
    },
    {
      text: "Administracja samorządowa",
      link: "/administracja/samorzadowa",
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

          <Link href={i.link}>
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

  console.log(data);
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
        <div className={classes.drawerHeader}>
          {/* <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton> */}
        </div>
        <Divider />
        <Box width="100%" alignSelf="center">
          <Box mt={4} mb={6}>
            <List>
              <Box pb={1}>
               
              </Box>
              <Box my={2}>
                <Typography variant="h6" display="block" gutterBottom>
                  Administracja
                </Typography>
              </Box>
              <RenderDataLinks />
            </List>
          </Box>
          <Divider />
          <List></List>
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
