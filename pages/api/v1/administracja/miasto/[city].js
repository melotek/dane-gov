import axios from "axios"

export default async (req, res) => {
    try {
        const globalRes = await axios.get(`https://api.dane.gov.pl/institutions/??city=${req.query.city}`,{
        params: {
         per_page: 100,   
        }}
        );
        const data = globalRes.data.data;
        //  Ewentualnie z paginacją ale jest tak mało podmiotów że paginacja będzie na froncie
        // const total = globalRes.data.meta.count;
        // const data = []
        // data.push(...data, institutions, total)
        res.status(200).json(data);
    //    console.log(data)
    //    console.log(total)
        
    } catch (e) {
        console.log(e)
        res.status(e.status || 400).json({message: "api error"})
    }
}
