import React from "react";
import { useGetUslugi } from "../../libs/actions/";
import { withRouter } from "next/router";
import { useRouter } from "next/router";

const Uslugi = () => {
  const router = useRouter();

  const { data, error, loading } = useGetUslugi(
    router.query.params ? `/api/v1/uslugi/${router.query.params}` : null
  );


  const renderInstytutions = (data) => {
    return data.map((att, i) => (
      <div
        key={i}
        dangerouslySetInnerHTML={{ __html: `${att.attributes.notes}` }}
      />
    ));
  };
  // const att = data.attributes
  // console.log(att)
  return <div>{data && <div>{renderInstytutions(data)}</div>}</div>;
};

export default withRouter(Uslugi);
