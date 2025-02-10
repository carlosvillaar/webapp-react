import axios from "axios";
import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [films, setFilms] = useState([]);

  const fetchData = () => {
    axios
      .get("http://localhost:3000/movies")
      .then((res) => {
        setFilms(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(fetchData, []);

  const value = { fetchData, films };
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
