import axios from "axios"
import { feedArray } from "utils/controlers";

export default async (req, res) => {
    try {

        const globalRes = await axios.get(`https://api.dane.gov.pl/institutions/`,{
        params: {
         per_page: 100,
         type: req.query.administracja
        }}
        );
    let data = globalRes.data.data;
    res.status(200).json(feedArray(data, {includeCityAttributes: true}));
  } catch (e) {
    console.log(e);
    res.status(e.status || 400).json({ message: "api error" });
  }
};
