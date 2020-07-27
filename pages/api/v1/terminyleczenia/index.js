import axios from "axios";
const convert = require("xml-js");

export default async (req, res) => {
  try {
    const globalRes = await axios.get(
      "https://api.nfz.gov.pl/app-itl-api/queues?benefit=udar"
    );
    const data = JSON.parse(
      convert.xml2json(globalRes.data, { compact: true })
    );
    res.status(200).json(data);
    console.log(globalRes);
  } catch (e) {
    console.log(e);
    res.status(e.status || 400).json({ message: "api error" });
  }
};
