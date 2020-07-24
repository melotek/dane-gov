import axios from "axios"

export default async (req, res) => {
    try {
        const globalRes = await axios.get(`https://api.dane.gov.pl/institutions/${req.query.params}/datasets`,{
      }
        );
        const data = globalRes.data.data;
        
        res.status(200).json(data);
        
    } catch (e) {
        console.log(e)
        res.status(e.status || 400).json({message: "api error"})
    }
}


