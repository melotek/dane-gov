import _ from "lodash";

export const feedArray = (data, {
  includeCityAttributes = false,
  includeMedicalBenefitAttributes = false
} = {}) => {
  let dataTable = [];
  let att = {};
  let links = {}
  let newArray = [];
  let result = [];

  if (includeCityAttributes){
  att = _.cloneDeep(_.map(data, "attributes"));
  links = _.map(data, "links");
  newArray = att.map((item, i) => Object.assign({}, item, links[i]));
  result = _.forEach(newArray, (d) => {
    _.pick(d, "website");
  });
  dataTable = _.map(
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
  )}
  if (includeMedicalBenefitAttributes) {
  att = _.cloneDeep(_.map(data.data, "attributes"));
  links = _.map(data, "links");
  newArray = attM.map((item, i) => Object.assign({}, item, linksM[i]));
  result = _.forEach(newArray, (d) => {
    _.pick(d, "website");
  });     

  dataTable = _.map(
    newArray,
    _.partialRight(_.pick, [
      "case",
      "benefit",
      "provider",
      "place",
      "address",
      "locality",
      "phone",
      "benefits-for-children",
      "toilet",
      "ramp",
      "car-park",
      "elevator",
      "latitude",
      "longitude",
    ])

  )};
  return (dataTable );
};

