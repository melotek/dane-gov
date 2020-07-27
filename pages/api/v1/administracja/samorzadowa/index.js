import axios from "axios";
import _ from "lodash";
export default async (req, res) => {
  try {
    const globalRes = await axios.get(
      "https://api.dane.gov.pl/institutions/?type=local",
      {
        params: {
          per_page: 3,
        },
      }
    );
    let data = globalRes.data.data;
    console.log(data);
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(e.status || 400).json({ message: "api error" });
  }
};
