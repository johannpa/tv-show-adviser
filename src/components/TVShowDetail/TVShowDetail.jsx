import s from "./style.module.css";

export function TVShowDetail({tvShow}){
    return <div>
        <div>{tvShow.name}</div>
        <div>{tvShow.vote_average/2}</div>
        <div>{tvShow.overview}</div>
    </div>
}