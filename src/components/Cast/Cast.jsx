import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastById } from 'service/getMovies';
import { CastImage, Character, Item, List } from './Cast.styled';
import defaultCast from '../../images/default-cast.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(movieId);
  }, [movieId]);

  const getCast = async id => {
    try {
      const response = await getCastById(id);

      setCast(response.cast.slice(0, 12));
    } catch (err) {
      console.error(err);
    }
  };

  const showCastImage = (actorSrc, defaultImg) => {
    const actorUrl = `https://image.tmdb.org/t/p/w500${actorSrc}`;

    return actorSrc ? actorUrl : defaultImg;
  };

  return (
    <List>
      {cast.map(({ id, original_name, character, profile_path }) => {
        return (
          <Item key={id}>
            <CastImage actor={showCastImage(profile_path, defaultCast)} />
            <h4>{original_name}</h4>
            <Character>{character}</Character>
          </Item>
        );
      })}
    </List>
  );
};

export default Cast;
