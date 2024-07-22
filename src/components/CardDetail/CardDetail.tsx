import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './CardDetail.module.css';
import Button from '../ui/Button';
import Preloader from '../Preloader/Preloader';

const API_KEY = '61ba9e64';
interface CardDetailState {
  Poster: string;
  Title: string;
  Director: string;
  Actors: string;
  Genre: string;
  Released: string;
  BoxOffice: string;
  Plot: string;
}

const initialState = {
  Poster: '',
  Title: '',
  Director: '',
  Actors: '',
  Genre: '',
  Released: '',
  BoxOffice: '',
  Plot: '',
};

export default function CardDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const detailId = searchParams.get('details');
  const [card, setCard] = useState<CardDetailState>(initialState);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${detailId}&plot=full`)
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
        setIsLoading(false);
      });
  }, [detailId]);

  console.log(card);

  const handlerClick = () => {
    setSearchParams({ details: '' });
  };

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <div className={styles.card}>
          <div className={styles.card_content}>
            <img src={card.Poster} alt="" />
            <h2 className={styles.title}>{card.Title}</h2>
            <p>
              <b>Director</b>: {card.Director}
            </p>
            <p>
              <b>Actors</b>: {card.Actors}
            </p>
            <p>
              <b>Genre</b>: {card.Genre}
            </p>
            <p>
              <b>Released</b>: {card.Released}
            </p>
            <p>
              <b>BoxOffice</b>: {card.BoxOffice}
            </p>

            <p>
              <b>Plot</b>: {card.Plot}
            </p>
            <Button className={styles.btn} onClick={handlerClick}>
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
