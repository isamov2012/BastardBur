/*

Write how many stars that were chosen: "You rated X stars"

*/

import { useState } from "react";
import starGray from "./stars/star-gray.png";
import star from "./stars/star.png";
import Default from "./posters/default.png";

function Movie(props) {
  const [chosenStars, setChosenStars] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(null);

  const maxstars = props.maxstars ?? 5;
  const title = props.title ?? "<No name>";
  const poster = props.poster ?? Default;

  const clickStar = (number) => {
    setChosenStars(number);
  };

  const hoverStar = (number) => {
    setHoveredStar(number);
  };

  const leftStar = () => {
    setHoveredStar(null);
  };

  const selectStarImageFor = (number) => {
    if (hoveredStar != null) {
      if (hoveredStar >= number) {
        return star;
      } else {
        return starGray;
      }
    } else if (chosenStars >= number) {
      return star;
    } else {
      return starGray;
    }
  };

  let starsArray = [];
  for (let i = 1; i <= maxstars; i++) {
    starsArray.push(i);
  }

  return (
    <article className="box movie">
      <h2 className="text-center">{title}</h2>

      <div className="text-center">
        <img className="img-fluid" src={poster} alt="Movie poster" />
      </div>

      <div className="text-center">
        {starsArray.map((n) => (
          <img
            key={n}
            src={selectStarImageFor(n)}
            onClick={() => clickStar(n)}
            onMouseEnter={() => hoverStar(n)}
            onMouseOut={() => leftStar()}
            className="movie__star"
            alt="Rating star"
          />
        ))}
      </div>

      <div className="movie__info" onClick={() => clickStar(0)}>
        {chosenStars === 0 ? <>&nbsp;</> : <>You rated {chosenStars} stars!</>}
      </div>
    </article>
  );
}

export default Movie;
