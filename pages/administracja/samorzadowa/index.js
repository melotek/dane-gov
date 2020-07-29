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
  // const [inst, setInstitutions] = useState(null);

  // useEffect(() => {
  //   setInstitutions(data);
  // }, [data]);

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
      options: {
        filter: false,
      },
    },
    {
      name: "street",
      label: "street",
    },
    {
      name: "street_number",
      label: "street_number",
      options: {
        filter: false,
      },
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
      options: {
        filter: false,
      },
    },
    {
      name: "website",
      label: "website",
      options: {
        filter: false,
      },
    },
    {
      name: "self",
      label: "self",
      options: {
        customBodyRender: (self) => {
          const spliteded = _.split(self, "/");
          const splited = _.slice(
            spliteded,
            [spliteded.length - 1],
            [spliteded.length]
          );
          return (
            <Link as={`/uslugi/${splited}`} href="/uslugi/[params]">
              <a style={{ color: "white" }}>
                link do otwartych danych podmiotu{" "}
                <img
                  src="/verified-database-symbol-for-interface.svg"
                  alt="data interface"
                  style={{ width: 25, height: "auto" }}
                />
              </a>
            </Link>
          );
        },
      },
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
              title={"Kontakt i link do danych"}
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
