import s from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
    const starList = [];
    const starFillCount = Math.floor(rating);
    const hasStarHalf = rating - starFillCount >= 0.5;
    const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);
    console.log(starFillCount, hasStarHalf, emptyStarCount);


    return <div>{starList}</div>
}