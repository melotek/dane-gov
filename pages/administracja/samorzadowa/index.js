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

export default function Home() {
  const classes = useStyles();
  const { data, error, loading } = useGetLocalInstitutions();
  const [links, setLinks] = useState([]);
  const [inst, setInstitutions] = useState(null);

  useEffect(() => {
    setInstitutions(data);
  }, [data]);
  console.log(inst);

  // const filter = inst.filter((i) => {
  //   return i.attributes.city
  //     .toLowerCase()
  //     .includes(setfilterByCity.toLowerCase());
  // });

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
        <TableCell component="th" scope="row">
          {institution.attributes.title}{" "}
          <img src={institution.attributes.iamge_url} alt="" />
        </TableCell>
        <TableCell align="right">{institution.attributes.tel}</TableCell>
        <TableCell align="right">
          {institution.attributes.postal_code}
        </TableCell>
        <TableCell align="right">
          {institution.attributes.street_type} {institution.attributes.street}
          {institution.attributes.street_number}
        </TableCell>
        <TableCell align="right">{institution.attributes.city}</TableCell>
        <TableCell align="right">{institution.attributes.email}</TableCell>
        <TableCell align="right">{institution.attributes.website}</TableCell>
        <TableCell align="right">
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
      <main>
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
      </main>
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
  },
});
