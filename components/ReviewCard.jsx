const ReviewCard = ({ review }) => {
  return (
    <>
      <div className="card mb-3">
        <div className="card-body">
          <p className="card-text">{review.vote}</p>
          <p className="card=text">{review.text}</p>
          <h6>{review.name}</h6>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
