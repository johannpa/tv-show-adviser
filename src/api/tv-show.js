import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "./config";

export class TVShowAPI {
  static async fetchPopulars() {
    const reponse = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    return reponse.data.results;
  }
}
