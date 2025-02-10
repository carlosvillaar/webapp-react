import { Link } from "react-router-dom";

const FilmCard = ({ filmData }) => {
  return (
    <div className="card p-3 mb-3">
      <div className="card-img">
        <img
          className="film-poster mb-3"
          src={filmData.image}
          alt={filmData.title}
        />
        <div className="card-title mb-3">
          <h3>{filmData.title}</h3>
        </div>
        <div>
          <Link to={`movie/${filmData.id}`} className="btn btn-primary">
            Vai nel Dettaglio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FilmCard;
