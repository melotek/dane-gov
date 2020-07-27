import axios from "axios";
import _ from "lodash";
export default async (req, res) => {
  try {
    const globalRes = await axios.get(
      "https://api.dane.gov.pl/institutions/?type=local",
      {
        params: {
          per_page: 100,
        },
      }
    );
    let data = globalRes.data.data;
    let att = _.cloneDeep(_.map(data, "attributes"));

    let links = _.map(data, "links");
    let newData = att.map((item, i) => Object.assign({}, item, links[i]));
    let result = _.forEach(newData, (d) => {
      _.pick(d, "website");
    });

    // let sss = _.forEach(JSON.stringify(credentials), (d) => {
    //   _.pick(d, ["fname:", "lname:"]);
    // });

    var mapped = _.map(
      newData,
      _.partialRight(_.pick, [
        "title",
        "city",
        "postal_code",
        "street_type",
        "street",
        "street_number",
        "tel",
        "email",
        "website",
        "self",
      ])
    );

    res.status(200).json(mapped);
  } catch (e) {
    console.log(e);
    res.status(e.status || 400).json({ message: "api error" });
  }
};
