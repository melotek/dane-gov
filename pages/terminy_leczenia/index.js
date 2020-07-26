import React from 'react'
import {useGetMedicalBenefits} from "../../libs/actions/"
import { withRouter } from "next/router";
import { useRouter } from "next/router";

const Miasto = () => {
const router = useRouter()
const { data, error, loading } = useGetMedicalBenefits(`/api/v1/terminy_leczenia`);
  console.log(data)
    return (
        <div>
            
        </div>
    )
}

export default withRouter(Miasto)
