import s from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
    return <div>
        <StarFill/>
        <StarFill/>
        <StarFill/>
        <StarHalf/>
        <StarEmpty/>
    </div>
}