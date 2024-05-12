import axios from "axios";
import { BASE_URL, API_KEY_PARAM } from "./config";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}tv/popular${process.env.REACT_APP_API_KEY_PARAM}`);
    return response.data.results;
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${process.env.REACT_APP_API_KEY_PARAM}`);
    return response.data.results;
  }

  static async fetchByTitle(title) {
    const response = await axios.get(
      `${BASE_URL}search/tv${process.env.REACT_APP_API_KEY_PARAM}&query=${title}`
    );
    return response.data.results;
  }
}
