import React from 'react'
import {useGetInstitutionsByCity} from "../../../libs/actions/"
import { withRouter } from "next/router";
import { useRouter } from "next/router";

const Miasto = () => {
const router = useRouter()
const { data, error, loading } = useGetInstitutionsByCity(
    router.query.city ? `/api/v1/administracja/miasto/${router.query.city}` : null
  );
    return (
        <div>
            
        </div>
    )
}

export default withRouter(Miasto)
