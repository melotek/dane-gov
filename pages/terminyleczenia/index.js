import React, {useEffect} from 'react'
import {useGetMedicalBenefits} from "../../libs/actions/"
import { withRouter } from "next/router";
import { useRouter } from "next/router";
import axios from "axios";

const Miasto = () => {
const router = useRouter()
const { data, error, loading } = useGetMedicalBenefits(`/api/v1/terminyleczenia`);

    return (
        <div>
            
        </div>
    )
}

export default withRouter(Miasto)
