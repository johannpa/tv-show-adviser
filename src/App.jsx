import React, { useEffect, useState } from "react";
import "./global.css";
import style from "./style.module.css";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./api/config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.png";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  const [recommendationList, setRecommendationList] = useState([]);
  

  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();
    if (populars.length > 0) {
      setCurrentTVShow(populars[0]);
    }
  }

  async function fetchRecommendations(tvShowId) {
    const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
    if (recommendations.length > 0) {
      setRecommendationList(recommendations.slice(0, 10));
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if(currentTVShow){
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  function setCurrentTVShowFromRecommendation(tvShow){
    alert(JSON.stringify(tvShow));
  }

  console.log("***", recommendationList);

  return (
    <div
      className={style.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              image={logo}
              title="Watowatch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-sm-12 col-md-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={style.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={style.recommended_shows}>
        {currentTVShow && (
          <>
            <TVShowListItem
              onClick={setCurrentTVShowFromRecommendation}
              tvShow={currentTVShow}
            />
            <TVShowListItem
              onClick={setCurrentTVShowFromRecommendation}
              tvShow={currentTVShow}
            />
            <TVShowListItem
              onClick={setCurrentTVShowFromRecommendation}
              tvShow={currentTVShow}
            />
          </>
        )}
      </div>
    </div>
  );
}
