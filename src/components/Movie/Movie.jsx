const Movie = ({
  movie: {
    adult,
    backdrop_path,
    genres,
    original_title,
    overview,
    poster_path,
    release_date,
    runtime,
  },
}) => {
  return (
    <div background={backdrop_path}>
      <div>
        <h2>{original_title}</h2>
        <div>
          <span>{release_date}</span>
          <span>{runtime}</span>
          <span>{adult}</span>
        </div>
        <p>{overview}</p>
      </div>
      <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt="" />
    </div>
  );
};

export default Movie;
