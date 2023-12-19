import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsById } from 'service/getMovies';
import { Author, Content, Item, List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setRevies] = useState([]);

  useEffect(() => {
    getReviews(movieId);
  }, [movieId]);

  const getReviews = async id => {
    try {
      const response = await getReviewsById(id);

      setRevies(response.results);
    } catch (error) {}
  };

  return (
    <List>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => {
          return (
            <Item key={id}>
              <Author>{author} :</Author>
              <Content>{content}</Content>
            </Item>
          );
        })
      ) : (
        <div style={{ textAlign: 'center', paddingBottom: '40px' }}>
          There are no reviews for this movie
        </div>
      )}
    </List>
  );
};

export default Reviews;
