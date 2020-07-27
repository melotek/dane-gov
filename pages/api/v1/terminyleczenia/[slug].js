import axios from "axios";
import SwaggerClient from "swagger-client";

export default async (req, res) => {
  try {
    const response = await SwaggerClient.apis.benefit.getBenefit({
      benefit: "ral",
    });
    console.log(response);
    res.status(200).json(response);
  } catch (error) {}
  // try {
  //     const globalRes = await axios.get(`https://api.nfz.gov.pl/app-itl-api/benefits?name=${req.query.benefit}`,{
  //   }
  //     );
  //     const data = globalRes.data.data;

  //     res.status(200).json(data);

  // } catch (e) {
  //     console.log(e)
  //     res.status(e.status || 400).json({message: "api error"})
  // }
};
