import React from "react";
import "./global.css";
import style from "./style.module.css";
import { TVShowAPI } from "./api/tv-show";

TVShowAPI.fetchPopulars();
export function App() {
  return (
    <div className={style.main_container}>
      <div className={style.header}>
        <div className="row">
          <div className="col-4">
            <div>Logo</div>
            <div>Subtitle</div>
          </div>
          <div className="col-sm-12 col-md-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={style.tv_show_detail}>Detail</div>
      <div className={style.recommendations}>Recommendations</div>
    </div>
  );
}
