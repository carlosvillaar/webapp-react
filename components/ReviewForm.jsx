import axios from "axios";
import { useState, useEffect } from "react";

const ReviewForm = ({ film_id, fetchFilm }) => {
  const api_url = `http://localhost:3000/movies/${film_id}/reviews`;

  const initialFormData = {
    vote: "",
    text: "",
    name: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const setFieldValue = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(api_url, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        setFormData(initialFormData);
        //ricarica la pagina e quindi si vede l'ultima recensione aggiunta
        fetchFilm(film_id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="mb-3 mt-4 text-light">
        <h5>Aggiungi una recensione</h5>
      </div>
      <form
        action="#"
        className=" form-control d-flex flex-column mb-5 text-bg-dark"
        onSubmit={handleSubmit}
      >
        <label htmlFor="vote" className=" form-label">
          Voto
        </label>
        <input
          className="mb-3"
          placeholder="Dai un voto a questo film da 1 a 5"
          type="number"
          name="vote"
          min={1}
          max={5}
          value={formData.vote}
          onChange={setFieldValue}
          required
        />

        <label htmlFor="text" className=" form-label">
          Recensione
        </label>
        <textarea
          className="mb-3"
          placeholder="Inserisci la tua recensione"
          rows="3"
          name="text"
          value={formData.text}
          onChange={setFieldValue}
          required
        />

        <label htmlFor="name" className=" form-label">
          Nome
        </label>
        <input
          className="mb-3"
          placeholder="Inserisci il tuo nome"
          type="text"
          name="name"
          value={formData.name}
          onChange={setFieldValue}
          required
        />

        <button type="submit" className="btn btn-primary mb-2 mt-2">
          Invia
        </button>
      </form>
    </>
  );
};

export default ReviewForm;
