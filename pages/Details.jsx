import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import ReviewCard from "../components/ReviewCard";

const Detail = () => {
  const { id } = useParams();
  const { film, fetchFilm } = useContext(GlobalContext);

  const renderReviews = () => {
    film?.reviews?.map((item) => {
      return <ReviewCard key={item.id} review={item} />;
    });
  };

  useEffect(() => fetchFilm(id), []);

  return (
    <>
      <h1 className="text-center">Recensioni per il film {film?.title}</h1>
      <div className="container">
        <div className="mt-5 d-flex gap-5">
          <img
            className="film-poster w-25"
            src={film?.image}
            alt={film?.title}
          />
          <div className="ms-3">
            <p>
              <span className=" fw-bold">Titolo:</span> {film?.title}
            </p>
            <p>
              <span className=" fw-bold">Regista:</span> {film?.director}
            </p>
            <p>
              <span className=" fw-bold">Genere:</span> {film?.genre}
            </p>
            <p>
              <span className=" fw-bold">Anno di uscita:</span>
              {film?.release_year}
            </p>
            <p>
              <span className=" fw-bold">Trama:</span> {film?.abstract}
            </p>
          </div>
        </div>

        <div className="mt-5">
          <h4 className="mb-3">Recensioni:</h4>
          {film?.reviews?.map((item) => {
            console.log(item);

            return <ReviewCard key={item.id} review={item} />;
          })}
        </div>

        <Link to={"/"} className="btn btn-primary">
          Torna indietro
        </Link>
      </div>
    </>
  );
};

export default Detail;
