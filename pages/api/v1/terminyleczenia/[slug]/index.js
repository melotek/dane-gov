import axios from "axios";
import _ from "lodash";
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
          page: 2,
          limit: 1,
          format: "json",
          case: 1,
          province: `${provinceSymbol.symbol}`,
          benefitForChildren: false,
          benefit: `${benefit}`,
        },
      }
    );

    const data = globalRes.data;
    let att = _.cloneDeep(_.map(data.data, "attributes"));
    let datas = _.cloneDeep(_.map(att, "dates"));
    let datases = _.cloneDeep(_.map(datas, ["applicable"]));
    let date = _.cloneDeep(_.map(datas, "date"));
    console.log(date);
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(e.status || 400).json({ message: "api error" });
  }
};
