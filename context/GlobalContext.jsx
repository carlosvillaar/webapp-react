import axios from "axios";
import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [films, setFilms] = useState([]);
  const [film, setFilm] = useState([]);
  const api_url = "http://localhost:3000/movies";

  const fetchFilms = () => {
    axios
      .get(api_url)
      .then((res) => {
        setFilms(res.data);
      })
      .catch((err) => console.log(err));
  };

  const fetchFilm = (id) => {
    axios
      .get(`${api_url}/${id}`)
      .then((res) => {
        setFilm(res.data);
      })
      .catch((err) => console.log(err));
  };

  const value = { fetchFilms, films, fetchFilm, film };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
