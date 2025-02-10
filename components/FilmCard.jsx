const FilmCard = ({ filmData }) => {
  return (
    <div className="card p-3 mb-3">
      <div className="card-title">{filmData.title}</div>
      <div className="card-img">
        <img
          className="film-poster"
          src={filmData.image}
          alt={filmData.title}
        />
      </div>
    </div>
  );
};

export default FilmCard;
