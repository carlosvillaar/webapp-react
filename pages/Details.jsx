import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

const Detail = () => {
  const { id } = useParams();
  const { film, fetchFilm } = useContext(GlobalContext);

  useEffect(() => fetchFilm(id), []);

  return (
    <>
      <div className="container text-light">
        <h1 className="text-light">Recensioni per il film: {film?.title}</h1>
        <div className="mt-5 d-flex gap-5">
          <img
            className="film-poster w-25"
            src={film?.image}
            alt={film?.title}
          />
          <div className="ms-3  d-flex flex-column  justify-content-center">
            <p className="mb-5 fst-italic">
              <span className=" fw-bold">Titolo:</span> {film?.title}
            </p>
            <p className="mb-5 fst-italic">
              <span className=" fw-bold">Regista:</span> {film?.director}
            </p>
            <p className="mb-5 fst-italic">
              <span className=" fw-bold">Genere:</span> {film?.genre}
            </p>
            <p className="mb-5 fst-italic">
              <span className=" fw-bold">Anno di uscita:</span>
              {film?.release_year}
            </p>
            <p className="mb-5 fst-italic">
              <span className=" fw-bold">Trama:</span> {film?.abstract}
            </p>
          </div>
        </div>

        <section className="mt-5">
          <ReviewForm film_id={film?.id} fetchFilm={fetchFilm} />
          <h4 className="mb-3 text-light">Recensioni:</h4>
          {film?.reviews?.map((item) => {
            return <ReviewCard key={item.id} review={item} />;
          })}
        </section>

        <div className="d-flex justify-content-start">
          <Link to={"/"} className="btn btn-primary btn-lg w-25">
            Torna indietro
          </Link>
        </div>
      </div>
    </>
  );
};

export default Detail;
