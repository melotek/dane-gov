import Layout from "../components/layout";
import { useGetGlobal } from "../libs/actions/";
import Home from "../components/home/";
const Index = () => {
  const { data, error, loading } = useGetGlobal();
  console.log(data);
  return (
    <>
      <Layout data={data}>
        <Home />
      </Layout>
    </>
  );
};

export default Index;
