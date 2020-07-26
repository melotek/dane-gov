import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(28,34,54)",
      complementaBg: "rgb(37,45,71)",
      boxBg: "rgb(46,56,88)",
      indendBg: "rgb(30,37,58)",
      lightBg: "rgb(102,132,227)",
      primaryText: "rgb(218,219,222)",
      secondaryText: "rgb(192,199,222)",
    },
  },
  typography: {
    fontFamily: [
      '"Segoe UI"',
      "Arial",
      "-apple-system",
      "BlinkMacSystemFont",

      "Roboto",
      '"Helvetica Neue"',
      "sans-serif",
      '"Apple Color Emoji"',
    ].join(","),
  },

  overrides: {
    MuiOutlinedInput: {
      root: {
        "& $notchedOutline": {
          borderColor: "rgb(218,219,222)",
        },
        "&$error $notchedOutline": {
          borderColor: "rgb(102,132,227)",
        },
        "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
          borderColor: "rgb(102,132,227)",
        },
        "&$focused $notchedOutline": {
          borderColor: "rgb(218,219,222)",
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "rgb(192,199,222)",
      },
    },
    MuiTableRow: {
      root: {
        "&:nth-child(odd)": {
          backgroundColor: "rgb(46,56,88)",
        },
        "&:nth-child(even)": {
          backgroundColor: "rgb(30,37,58)",
        },
      },
    },
  },
});
theme.typography.overline = {
  fontSize: "0.914rem",
  "@media (min-width:600px)": {
    fontSize: "1.0rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "1.125rem",
  },
};
export default theme;
