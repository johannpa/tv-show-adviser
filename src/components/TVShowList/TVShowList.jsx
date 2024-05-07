import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export function TVShowList({ tvShowList }) {
    return (
    <>
        <div>You may also like:</div>
        <div>
            {tvShowList.map((tvShow) => {
                return (
                    <TVShowListItem tvShow={tvShow} onClick={() =>""} />
                );
            })}
        </div>
    </>
    );
}