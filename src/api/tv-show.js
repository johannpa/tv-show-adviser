import axios from "axios";

export class TVShowAPI {
  static async fetchPopulars() {
    const reponse = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
    console.log("***", reponse.data.results);
    return reponse.data.results;
  }
}
