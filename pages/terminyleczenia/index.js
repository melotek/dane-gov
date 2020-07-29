import React, { useState, useEffect, useRef } from "react";
import { useGetMedicalBenefits } from "../../libs/actions/";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "components/layout.js";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  TextField,
  Button,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import _ from "lodash";

const Index = () => {
  const router = useRouter();
  const [benefit, setBenefit] = useState();
  const [province, setProvince] = useState("");
  const provinces = [
    " ",
    "kujawsko-pomorskie",
    "dolnośląskie",
    "lubelskie",
    "lubuskie",
    "łódzkie",
    "małopolskie",
    "mazowieckie",
    "opolskie",
    "podkarpackie",
    "podlaskie",
    "pomorskie",
    "śląskie",
    "świętokrzyskie",
    "warmińsko-mazurskie",
    "wielkopolskie",
    "zachodniopomorskie",
  ];
  const preventDefault = (f) => (e) => {
    e.preventDefault();
    f(e);
  };
  const onSearchBenefitHandler = (setValue) => (e) => {
    setBenefit(e.target.value);
  };

  const onSelectProvinceHandler = (e) => {
    setProvince(e.target.value);
  };

  const onSubmitForm = preventDefault(() => {
    router.push("/terminyleczenia/[slug]", `/terminyleczenia/${params}`, {
      query: { slug: params },
    });
  });
  let params = `${benefit}&${province}`;
  // useEffect(() => {
  //   routeToPath(benefit);
  // }, [benefit]);
  return (
    <>
      <Layout>
        <Typography gutterBottom variant="h5" component="h2">
          Uzupełnienie choć jednej informacji, spowoduje że szybko dowiesz się
          gdzie i kiedy najszybciej możesz uzyskać pomoc medyczną
        </Typography>
        <form onSubmit={onSubmitForm}>
          <TextField
            label="Świadczenie NFZ"
            // className={classes.margin}
            variant="filled"
            id="reddit-input"
            type="text"
            placeholder="Tutaj wpisz nazwę"
            value={benefit}
            onChange={onSearchBenefitHandler(setBenefit)}
          />

          <FormControl
            variant="filled"
            // className={classes.formControl}
          >
            <InputLabel htmlFor="filled-age-native-simple">
              Województwo
            </InputLabel>
            <Select
              native
              value={province}
              onChange={onSelectProvinceHandler}
              inputProps={{
                name: "province",
                id: "filled-age-native-simple",
              }}
            >
              {provinces.map((id) => {
                return <option value={id}>{id}</option>;
              })}
            </Select>
          </FormControl>
          <input type="submit" value="Submit" />
        </form>
      </Layout>
    </>
  );
};
// const useStylesReddit = makeStyles((theme) => ({
//   root: {
//     border: "1px solid #e2e2e1",
//     overflow: "hidden",
//     borderRadius: 4,
//     backgroundColor: "#rgb(192,199,222)",
//     transition: theme.transitions.create(["border-color", "box-shadow"]),
//     "&:hover": {
//       backgroundColor: "rgb(102,132,227)",
//     },
//     "&$focused": {
//       backgroundColor: "rgb(218,219,222)",
//       boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
//       borderColor: theme.palette.primary.main,
//     },
//   },

// }));

export default Index;
