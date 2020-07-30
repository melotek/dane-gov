import Layout from "components/layout.js";
import { Box, Typography } from "@material-ui/core";
import SearchBar from "components/searchbar/index";
const Index = () => {
  return (
    <>
      <Layout>
        <Typography gutterBottom variant="h5" component="h2">
          Uzupełnienie choć jednej informacji, spowoduje że szybko dowiesz się
          gdzie i kiedy najszybciej możesz uzyskać pomoc medyczną
        </Typography>
        <SearchBar />
      </Layout>
    </>
  );
};

export default Index;
