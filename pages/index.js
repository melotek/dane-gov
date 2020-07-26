import Layout from "../components/layout";
import { useGetGlobal } from "../libs/actions/";

const Home = () => {
  const { data, error, loading } = useGetGlobal();
  console.log(data);
  return (
    <>
      <Layout></Layout>
    </>
  );
};

export default Home;
