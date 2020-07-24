import Head from "next/head";
import Link from "next/link";
import { useGetStateInstitutions } from "../../../libs/actions/";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TablePagination from "@material-ui/core/TablePagination";


export default function Home() {
  const classes = useStyles();
  const {data, error, loading } = useGetStateInstitutions();

  const tableHeader = [
    "Nazwa",
    "Telefon",
    "Adres",
    "Miasto",
    "Email",
    "Przydatne informacje",
    // "Strona epuap",
    // "Fax",
  ];
console.log(data)
  const renderHeader = (tableHeader) => {
    return tableHeader.map((head, i) => (
      <TableCell className={classes.head} key={i}>
        {head}
      </TableCell>
    ));
  };
  const renderInstytutions = (data) => {
    return data.map((institution, i) => (
      <TableRow key={i}>
        <TableCell component="th" scope="row">
          {institution.attributes.title}
        </TableCell>
        <TableCell align="right">{institution.attributes.tel}</TableCell>
        <TableCell align="right">
          {institution.attributes.street_type} {institution.attributes.street}{" "}
          {institution.attributes.street_number}
        </TableCell>
        <TableCell align="right">{institution.attributes.city}</TableCell>
        <TableCell align="right">{institution.attributes.email}</TableCell>
        <TableCell align="right">{institution.attributes.website}</TableCell>
        {/* <TableCell align="right">{institution.attributes.epuap}</TableCell>
        <TableCell align="right">{institution.attributes.fax}</TableCell> */}
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
        {data && (
          <>
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  {" "}
                  <TableRow>{renderHeader(tableHeader)} </TableRow>
                </TableHead>
                <TableBody>{renderInstytutions(data)}</TableBody>
              </Table>
            </TableContainer>
          </>
        )}
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

