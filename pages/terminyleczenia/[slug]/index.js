import React from 'react'
import {useGetMedicalBenefitsByName} from "../../../libs/actions/"
import { withRouter } from "next/router";
import { useRouter } from "next/router";

const Index = () => {
const router = useRouter()
const { data, error, loading } = useGetMedicalBenefitsByName(
    router.query.slug ? `/api/v1/terminyleczenia/${router.query.slug}` : null
  );
    return (
        <div>
            {/* {data.attr} */}
        </div>
    )
}

export default Index
