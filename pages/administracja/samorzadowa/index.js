import Head from "next/head";
import Link from "next/link";
import { useGetLocalInstitutions } from "../../../libs/actions/";

import MUIDataTable from "mui-datatables";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Layout from "../../../components/layout";
import clsx from "clsx";
import _ from "lodash";

export default function Home() {
  const classes = useStyles();
  const { data, error, loading } = useGetLocalInstitutions();
  // const [links, setLinks] = useState([]);
  const [inst, setInstitutions] = useState(null);

  useEffect(() => {
    setInstitutions(data);
  }, [data]);

  const handleCollapse = async (e) => {
    e.preventDefault();
    await setUrl(e.currentTarget.value);
  };
  // const tableHeader = [
  //   "Nazwa",
  //   "Telefon",
  //   "Kod pocztowy",
  //   "Adres",
  //   "Miasto",
  //   "Email",
  //   "Strona internetowa",
  //   "Przydatne informacje",
  // ];
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    setTableData(data);
  }, [data]);
  console.log(tableData);

  const columns = [
    {
      name: "title",
      label: "Name",
      options: {
        filter: true,
      },
    },
    {
      name: "city",
      label: "city",
      options: {
        filter: true,
      },
    },
    {
      name: "postal_code",
      label: "postal_code",
      options: {
        filter: true,
      },
    },
    {
      name: "street_type",
      label: "street_type",
    },
    {
      name: "street",
      label: "street",
    },
    {
      name: "street_number",
      label: "street_number",
    },
    {
      name: "tel",
      label: "tel",
      options: {
        filter: true,
      },
    },
    {
      name: "email",
      label: "email",
    },
    {
      name: "website",
      label: "website",
    },
    {
      name: "self",
      label: "self",
    },
  ];

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "vertical",
    enableNestedDataAccess: ".", // allows nested data separated by "." (see column names and the data structure above)
  };

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {loading && <p>Loading data ...</p>}
        {data && (
          <>
            <MUIDataTable
              title={"ACME Employee list"}
              data={tableData}
              columns={columns}
              options={options}
            />
          </>
        )}
        {error && <div className="alert alert-danger">error</div>}
      </Layout>
    </div>
  );
}
const useStyles = makeStyles({
  head: {
    "&:nth-child(n+2)": {
      textAlign: "right",
    },
    "&:first-child": {
      width: 150,
    },
    "&:nth-child(2)": {
      width: 160,
    },
    color: "white",
    fontWeight: 700,
    fontSize: "1rem",
    "@media (min-width:600px)": {
      fontSize: "1.225rem",
    },
  },
  // primeCell: {
  //   width: 200,
  // },
  // complimentCell: {
  //   maxWidth: 130,
  // },
  lastCell: {
    width: 50,
  },
  colorCell: {
    color: "rgb(218,219,222)",
    fontSize: "1rem",
    "@media (min-width:600px)": {
      fontSize: "1.185rem",
    },
  },
});
