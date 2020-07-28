import _ from "lodash";

export const feedArray = (data) => {
  let att = _.cloneDeep(_.map(data, "attributes"));
  let links = _.map(data, "links");
  let newArray = att.map((item, i) => Object.assign({}, item, links[i]));
  let result = _.forEach(newArray, (d) => {
    _.pick(d, "website");
  });
  let dataTable = _.map(
    newArray,
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
  return dataTable;
};
