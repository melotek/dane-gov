import axios from "axios";
import SwaggerClient from "swagger-client";

export default async (req, res) => {
  try {
    const response = await SwaggerClient.apis.benefit.getBenefit("https://api.nfz.gov.pl/app-stat-api-ra/swagger/v1/swagger.json", {
      benefit: "rak",
    });
    console.log(response);
    res.status(200).json(response);
  } catch (error) {
      console.log(error);
  }}