import React from 'react'
import {useGetMedicalBenefitsByName} from "../../libs/actions/"
import { withRouter } from "next/router";
import { useRouter } from "next/router";

const Miasto = () => {
const router = useRouter()
const { data, error, loading } = useGetMedicalBenefitsByName(
    router.query.slug ? `/api/v1/terminy_leczenia/${router.query.slug}` : null
  );
  console.log(data)
    return (
        <div>
            
        </div>
    )
}

export default withRouter(Miasto)
