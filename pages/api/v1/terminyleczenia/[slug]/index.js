import axios from "axios";
import _ from "lodash";
import { feedArray } from "../../../../../utils/controlers";
export default async (req, res) => {
  const Provinces = [
    { symbol: "01", name: "dolnośląskie" },
    { symbol: "02", name: "kujawsko-pomorskie" },
    { symbol: "03", name: "lubelskie" },
    { symbol: "04", name: "lubuskie" },
    { symbol: "05", name: "łódzkie" },
    { symbol: "06", name: "małopolskie" },
    { symbol: "07", name: "mazowieckie" },
    { symbol: "08", name: "opolskie" },
    { symbol: "09", name: "podkarpackie" },
    { symbol: "10", name: "podlaskie" },
    { symbol: "11", name: "pomorskie" },
    { symbol: "12", name: "śląskie" },
    { symbol: "13", name: "świętokrzyskie" },
    { symbol: "14", name: "warmińsko-mazurskie" },
    { symbol: "15", name: "wielkopolskie" },
    { symbol: "16", name: "zachodniopomorskie" },
  ];
  let provinceSymbol = _.find(Provinces, [
    "name",
    _.last(_.split(`${req.query.slug}`, "&", 2)),
  ]);
  let benefit = _.head(_.split(`${req.query.slug}`, "&", 2));

  try {
    const globalRes = await axios.get(
      "https://api.nfz.gov.pl/app-itl-api/queues?api-version=1.3",
      {
        header: {
          accept: "application/json",
        },
        params: {
          page: 1,
          limit: 25,
          format: "json",
          province: `${provinceSymbol.symbol}`,
          benefitForChildren: false,
          benefit: `${benefit}`,
        },
      }
    );

    const data = globalRes.data;

    res
      .status(200)
      .json(feedArray(data, { includeMedicalBenefitAttributes: true }));
  } catch (e) {
    console.log(e);
    res.status(e.status || 400).json({ message: "api error" });
  }
};
