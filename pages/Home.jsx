import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";
import FilmCard from "../components/FilmCard";

const Home = () => {
  const { fetchFilms, films } = useContext(GlobalContext);

  const renderFilms = () => {
    return films.map((film) => {
      return (
        <div key={film.id}>
          <FilmCard filmData={film} />
        </div>
      );
    });
  };
  useEffect(fetchFilms, []);

  return (
    <>
      <h1 className="text-center">BoolFilms</h1>
      <div className="container my-5">
        <div className="row row-cols-3">{renderFilms()}</div>
      </div>
    </>
  );
};

export default Home;
