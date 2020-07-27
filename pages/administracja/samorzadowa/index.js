import Head from "next/head";
import Link from "next/link";
import { useGetLocalInstitutions } from "../../../libs/actions/";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
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
  const tableHeader = [
    "Nazwa",
    "Telefon",
    "Kod pocztowy",
    "Adres",
    "Miasto",
    "Email",
    "Strona internetowa",
    "Przydatne informacje",
  ];

  // let attributes = _.cloneDeep(
  //   data.administracja.institutions.type((m) =>
  //     _.omit(m.attributes, [
  //       "self",
  //       "notes",
  //       "modified",
  //       "datasets_count",
  //       "flat_number",
  //       "epuap",
  //       "created",
  //       "slug",
  //       "sources",
  //       "resources_count",
  //       "image_url",
  //       "abbreviation",
  //       "regon",
  //       "description",
  //       "fax",
  //       "institution_type",
  //       "street_type",
  //     ])
  //   )
  // );

  // let links = data.map((m) => m.links);
  // let newData = attributes.map((item, i) => Object.assign({}, item, links[i]));

  // let complete_array = newData.map(function (obj) {
  //   return Object.keys(obj)
  //     .sort()
  //     .map(function (key) {
  //       return obj[key];
  //     });
  // });
  // const removed_address = complete_array.map((i) => {
  //   return i.slice(4, 6).join(" ");
  // });
  // let with_out_address = _.remove(complete_array, function (adres) {
  //   return (
  //     adres ==
  //     complete_array.map((i) => {
  //       return i[3];
  //     })
  //   );
  // });

  // const address = complete_array.map((i) => {
  //   return i.slice(4, 5).join(" ");
  // });

  // console.log(data);

  const renderHeader = (tableHeader) => {
    return tableHeader.map((head, i) => (
      <TableCell className={classes.head} key={i}>
        {head}
      </TableCell>
    ));
  };
  const renderInstytutions = (inst) => {
    return inst.map((institution, i) => (
      <TableRow key={i}>
        <TableCell
          className={clsx(classes.primeCell, classes.colorCell)}
          component="th"
          variant="head"
        >
          {institution.attributes.title}{" "}
          <img src={institution.attributes.iamge_url} alt="" />
        </TableCell>
        <TableCell
          className={clsx(classes.primeCell, classes.colorCell)}
          variant="body"
          align="right"
        >
          {institution.attributes.tel}
        </TableCell>
        <TableCell
          className={clsx(classes.lastCell, classes.colorCell)}
          align="right"
          sizeSmall
          variant="body"
        >
          {institution.attributes.postal_code}
        </TableCell>
        <TableCell
          align="right"
          variant="body"
          sizeSmall
          className={clsx(classes.primeCell, classes.colorCell)}
        >
          {institution.attributes.street_type}
          {institution.attributes.street}
          {institution.attributes.street_number}
        </TableCell>
        <TableCell
          align="right"
          variant="body"
          sizeSmall
          className={clsx(classes.lastCell, classes.colorCell)}
        >
          {institution.attributes.city}
        </TableCell>
        <TableCell
          align="right"
          variant="body"
          sizeSmall
          className={clsx(classes.complimentCell, classes.colorCell)}
        >
          {institution.attributes.email}
        </TableCell>
        <TableCell
          align="right"
          variant="body"
          sizeSmall
          className={clsx(classes.complimentCell, classes.colorCell)}
        >
          {institution.attributes.website}
        </TableCell>
        <TableCell
          align="right"
          variant="body"
          sizeSmall
          className={clsx(classes.lastCell, classes.colorCell)}
        >
          <Link
            as={`/uslugi/${institution.id},${institution.attributes.slug}`}
            href="/uslugi/[params]"
          >
            <a>
              <img
                src="/verified-database-symbol-for-interface.svg"
                alt="data interface"
                style={{ width: 25, height: "auto" }}
              />
            </a>
          </Link>
        </TableCell>
      </TableRow>
    ));
  };
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {loading && <p>Loading data ...</p>}
        {inst && (
          <>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>{renderHeader(tableHeader)}</TableRow>
                </TableHead>
                <TableBody>{renderInstytutions(inst)}</TableBody>
              </Table>
            </TableContainer>
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
