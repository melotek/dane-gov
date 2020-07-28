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
    MuiTypography: {
      h1: {
        color: "rgb(192,199,222)",
        fontSize: "calc(60px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
      },
      h2: {
        color: "rgb(192,199,222)",
        fontSize: "calc(48px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
      },
      h3: {
        color: "rgb(192,199,222)",
        fontSize: "calc(36px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
      },
      h4: {
        color: "rgb(218,219,222)",
        fontSize: "calc(24px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
      },
      h5: {
        color: "rgb(218,219,222)",
        fontSize: "calc(18px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
      },
      h6: {
        color: "rgb(218,219,222)",
        fontSize: "calc(15px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
      },
      paragraph: {
        color: "white",
        fontSize: "calc(12px + (26 - 14) * ((100vw - 300px) / (1600 - 300)))",
      },
    },
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
    MUIDataTableBodyCell: {
      root: {
        color: "white",
      },
    },
    MuiTable: {
      borderColor: "rgb(102,132,227)",
    },

    MuiTableRow: {
      root: {
        "&:nth-child(odd)": {
          backgroundColor: "rgb(46,56,88)",
        },
        "&:nth-child(even)": {
          backgroundColor: "rgb(37,45,71)",
        },
        "&:hover": {
          "&:nth-child(4n+1):not(:last-child)": {
            background:
              "linear-gradient(to left, #2dc1c9 0%, #2194c1 30%, #252d47 100%)",
          },
          "&:nth-child(4n+2)": {
            background:
              "linear-gradient(to left, #e47c64 0%, #e36481 30%, #252d47 100%)",
          },
          "&:nth-child(4n+3)": {
            background:
              "linear-gradient(to left, #ffba00 0%, #fc9244 30%, #252d47 100%)",
          },
          "&:nth-child(4n+4)": {
            background:
              "linear-gradient(to left, #7a79fe 0%, #a758f5 30%, #252d47 100%)",
          },
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: "rgb(30,37,58)",
        color: "white",
      },
    },
    MUIDataTableHeadCell: {
      fixedHeader: {
        backgroundColor: "rgb(30,37,58)",
        color: "white",
      },
    },
    MUIDataTableToolbarSelect: {
      root: { backgroundColor: "rgb(30,37,58)" },
    },
    MUIDataTableSelectCell: {
      headerCell: {
        backgroundColor: "rgb(30,37,58)",
        color: "white",
      },
    },
    MUIDataTableFilter: {
      root: {
        backgroundColor: "rgb(30,37,58)",
        color: "white",
      },
    },
    Mui: {
      "&$focused": { color: "white" },
    },
    MuiInputBase: {
      input: {
        color: "rgb(218,219,222)",
        borderBottom: "1px solid rgb(102,132,227)",
      },
    },
    MuiFormLabel: { root: { color: "white" } },

    MuiInput: {
      underline: {
        "&::after": {
          borderBottom: "2px solid rgb(102,132,227)",
        },
      },
    },
    MUIDataTableToolbar: {
      iconActive: {
        color: "white",
      },
      icon: { "&:hover": { color: "white" } },
    },
    MuiIconButton: {
      root: {
        color: "rgb(218,219,222)",
      },
    },
    MUIDataTableSearch: {
      searchIcon: {
        color: "rgb(218,219,222)",
      },
    },
    MuiCheckbox: {
      root: {
        color: "rgb(218,219,222)",
        "&$checked": {
          color: "rgb(218,219,222)  !important",
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
