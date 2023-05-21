import axios from "axios";
const BASE_URL = "https://645cbfa7250a246ae30cebd7.mockapi.io";

export async function getTweets(page, perPage) {
  const response = await axios.get(
    `${BASE_URL}/users?page=${page}&limit=${perPage}`
  );
  return response.data;
}
