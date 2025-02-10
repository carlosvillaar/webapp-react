import { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Home = () => {
  const { fetchData, films } = useContext(GlobalContext);

  const renderFilms = () => {
    return films.map((film) => {
      return <p key={film.id}>{film.title}</p>;
    });
  };
  useEffect(fetchData, []);

  return <>{renderFilms()}</>;
};

export default Home;
