import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import _ from "lodash";

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
const SearchBar = ({
  display,
  flexDirection,
  width,
  height,
  justifyContent,
}) => {
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

  return (
    <form onSubmit={onSubmitForm}>
      <Box
        height={height}
        justifyContent={justifyContent}
        display={display}
        flexDirection={flexDirection}
        width={width}
      >
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
              return (
                <option key={id} value={id}>
                  {id}
                </option>
              );
            })}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          size="large"
          color="secondary"
          type="submit"
          value="Submit"
        >
          Wyszukaj
        </Button>
      </Box>
    </form>
  );
};

export default SearchBar;
