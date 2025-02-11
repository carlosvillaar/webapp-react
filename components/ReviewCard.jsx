const ReviewCard = ({ review }) => {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body text-bg-dark">
          <p className="card-text">
            <span className="fw-bold">Voto: </span>
            {review.vote}
          </p>
          <p className="card=text">
            <span className="fw-bold">Recensione: </span>
            {review.text}
          </p>
          <h6>
            <span className="fw-bold">Nome: </span>
            {review.name}
          </h6>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
