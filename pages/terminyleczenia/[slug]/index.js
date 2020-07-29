import React, { useState, useEffect } from "react";
import Head from "next/head";
import Layout from "../../../components/layout";

import { useGetMedicalBenefitsByName } from "../../../libs/actions/";
import { withRouter } from "next/router";
import { useRouter } from "next/router";
import MUIDataTable from "mui-datatables";
import { makeStyles } from "@material-ui/core/styles";

const Index = () => {
  const classes = useStyles();

  const router = useRouter();
  const { data, error, loading } = useGetMedicalBenefitsByName(
    router.query.slug ? `/api/v1/terminyleczenia/${router.query.slug}` : null
  );
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    setTableData(data);
  }, [data]);
  const columns = [
    {
      name: "0",
      label: "Najszybszy termin",
      options: {
        filter: true,
      },
    },
    {
      name: "benefit",
      label: "Świadczenie",
      options: {
        filter: true,
      },
    },
    {
      name: "provider",
      label: "Placówka zdrowotna",
      options: {
        filter: true,
      },
    },
    {
      name: "place",
      label: "Jednostka organizacyjna",
      options: {
        filter: false,
      },
    },
    {
      name: "address",
      label: "Adres",
      options: {
        filter: true,
      },
    },
    {
      name: "locality",
      label: "Miasto",
      options: {
        filter: true,
      },
    },
    {
      name: "phone",
      label: "Telefon",
      options: {
        filter: true,
      },
    },
    {
      name: "toilet",
      label: "Toaleta",
      options: {
        filter: true,
      },
    },
    {
      name: "ramp",
      label: "Podjazd dla niepełnosprawnych",
      options: {
        filter: true,
      },
    },
    {
      name: "elevator",
      label: "Winda",
      options: {
        filter: true,
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
              title={"Lista placówek medycznych, które mogą się tobą zająć"}
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
};

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

export default Index;
