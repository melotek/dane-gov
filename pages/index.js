import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const [filterByCity, setfilterByCity] = useState("");
  const router = useRouter();

  const searchHandler = (event) => {
    setfilterByCity(event.currentTarget.value);
  };

  const routeToPath = () => {
    router.push({
      pathname: "/administracja/miasto/[city]",
      query: { city: `${filterByCity}` },
    });
  };

  // useEffect(() => {
  //   routeToPath();
  // }, [filterByCity]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Wpisz miasto"
          variant="outlined"
          name="city"
          type="text"
          value={filterByCity}
          onChange={searchHandler}
          autoComplete="off"
        />
        <input type="submit" value="Wyślij" />
      </form>
      <Link href="/administracja/samorzadowa">
        <a>Administracja samorządowa</a>
      </Link>
      <Link href="/administracja/rzadowa">
        <a>Administracja rządowa</a>
      </Link>
      <Link href="/dane">
        <a>Administracja rządowa</a>
      </Link>
    </>
  );
};

export default Home;
