const axios = require("axios");
const HttpError = require("../models/http-error");

const API_KEY = "AIzaSyD_Fi4fb97Ye0V5X2Puk1gUqlcI1Yujajs";

async function getCoordsForAddress(address) {
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${API_KEY}`
  );

  const data = response.data;

  if (!data || data.status === "ZERO_RESULTS") {
    throw new HttpError(
      "Could not find location for the specified address",
      422
    );
  }

  const coordinates = data.results[0].geometry.location;

  return coordinates;
}

module.exports = getCoordsForAddress;
