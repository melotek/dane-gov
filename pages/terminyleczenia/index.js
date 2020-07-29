import React, { useState, useEffect, useRef } from "react";
import { useGetMedicalBenefits } from "../../libs/actions/";
import { useRouter } from "next/router";
import axios from "axios";
import Layout from "components/layout.js";
import { Box, Typography, Select, MenuItem } from "@material-ui/core";
import _ from "lodash";
const Index = () => {
  const router = useRouter();
  const [benefit, setBenefit] = useState();
  const [province, setProvince] = useState("");
  const provinces = [
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
          <input
            type="text"
            placeholder="Keyword"
            value={benefit}
            onChange={onSearchBenefitHandler(setBenefit)}
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={province}
            onChange={onSelectProvinceHandler}
          >
            {provinces.map((id) => {
              return <MenuItem value={id}>{id}</MenuItem>;
            })}
          </Select>
          <input type="submit" value="Submit" />
        </form>
      </Layout>
    </>
  );
};

export default Index;
