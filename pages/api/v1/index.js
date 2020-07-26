import axios from "axios"
import { toPlainObject } from "lodash";

export default async (req, res) => {
    
    try {
        const localRes = await axios.get('https://api.dane.gov.pl/institutions/?type=local',{
        params: {
         per_page: 100,   
        }}
        );
        const stateRes = await axios.get('https://api.dane.gov.pl/institutions/?type=state',{
        params: {
         per_page: 100,   
        }}
        );
        const totalLocal = localRes.data.meta.count;
        const totalState = stateRes.data.meta.count;
        const data = [
            {text: "Administracja samorządowa",  count: totalLocal, link: "/administracja/samorzadowa"},

            {text: "Administracja rządowa", count: totalState,  link: "/administracja/rzadowa"},
        
        ]
     
         res.status(200).json(data);

        
    } catch (e) {
        console.log(e)
        res.status(e.status || 400).json({message: "api error"})
    }
}


