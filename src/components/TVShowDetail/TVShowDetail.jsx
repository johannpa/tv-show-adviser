import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import s from "./style.module.css";

export function TVShowDetail({tvShow}){
    const rating = tvShow.vote_average.toFixed(1) / 2;

    return <div>
        <div className={s.title}>{tvShow.name}</div>
        <div className={s.rating_container}>
            <FiveStarRating rating={rating}/>
            <div className={s.rating}>{rating}</div>
        </div>
        <div className={s.overview}>{tvShow.overview}</div>

    </div>
}