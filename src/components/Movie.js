import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Movie.module.css";
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={style.movie_card}>
      <img className={style.movie_image} src={coverImg} alt={title} />
      <div>
        <h2 className={style.text_line}>
          <Link
            className={style.text_decoration}
            to={`${process.env.PUBLIC_URL}/movie/${id}`}
          >
            {title}
          </Link>
        </h2>
        <ul className={style.movie_category}>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p className={style.summary}>{summary}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
