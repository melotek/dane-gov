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
                <svg
                  class="brand-img"
                  aria-labelledby="logo-header-title"
                  preserveAspectRatio="xMinYMid meet"
                  version="1.1"
                  viewBox="0 0 150 50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title class="ng-tns-c1-0" id="logo-header-title">
                    Otwarte Dane
                  </title>
                  <text
                    fill="rgb(218,219,222)"
                    class="brand-img__text"
                    x="0"
                    y="0"
                  >
                    <tspan class="ng-tns-c1-0" x="75" y="25">
                      OTWARTE
                    </tspan>
                    <tspan class="ng-tns-c1-0" x="75" y="45">
                      DANE
                    </tspan>
                  </text>
                  <g class="brand-img__do" fill="rgb(102,132,227)">
                    <path
                      class="ng-tns-c1-0"
                      d="M62.6,5.3H70L58.9,46h-7.4C51.5,46,62.6,5.3,62.6,5.3z"
                    ></path>
                    <path
                      class="ng-tns-c1-0"
                      d="M25.7-0.2C25.7-0.2,25.6-0.2,25.7-0.2c-13.8,0-25,11.2-25,25s11.2,25,25,25s25-11.2,25-25l0,0
                                C50.6,10.9,39.5-0.2,25.7-0.2L25.7-0.2L25.7-0.2z M28.4,40.5H13.6V10.9h14.8c0.1,0,0.3,0,0.5,0c8.2,0,14.8,6.6,14.8,14.8
                                s-6.6,14.8-14.8,14.8C28.7,40.5,28.6,40.5,28.4,40.5L28.4,40.5L28.4,40.5z"
                    ></path>
                  </g>
                </svg>
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
          <img src="/logo-nik.svg" alt="" />
          <List></List>
        </Box>
      </Drawer>
    </>
  );
};
const drawerWidth = 360;

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
