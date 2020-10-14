import React from "react";
import { Link } from "react-router-dom";
import ProTypes from "prop-types";
import "./Movie.css";
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: "/movie-detail",
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie">
        <img src={poster} alt={title} title={title} />
        <div className="movie_data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 140)}...</p>
        </div>
      </div>
    </Link>
  );
}

Movie.ProTypes = {
  id: ProTypes.number.isRequired,
  year: ProTypes.number.isRequired,
  title: ProTypes.string.isRequired,
  summary: ProTypes.string.isRequired,
  poster: ProTypes.string.isRequired,
  genres: ProTypes.string.isRequired,
};

export default Movie;
