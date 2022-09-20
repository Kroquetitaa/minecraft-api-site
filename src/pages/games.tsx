import PagesLayout from '@components/PagesLayout';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import style from '../styles/Games.module.css';
import Image from 'next/image';
import logo1 from '@logos/minecraft-logo.png';
import logo2 from '@logos/principal-logo.png';
import logo3 from '@logos/logo.png';

export const getStaticProps: GetStaticProps = async () => {
  const urlGames: string = 'http://localhost:8080/api/games/';
  const response = await fetch(urlGames);
  const { results } = await response.json();

  return {
    props: {
      results,
    },
  };
};

const games = ({ results }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const title: string = 'Games';

  return (
    <PagesLayout title={title}>
      <div className={style.background}>
        <div className={style.container}>
          <div className={style.carousel}>
            <input type="radio" id="carousel-1" name="carousel[]" checked />
            <input type="radio" id="carousel-2" name="carousel[]" />
            <ul className={style.carousel__items}>
              <li className={style.carousel__item}>
                <Image src={results[1].image} width={1440} height={610} />
              </li>
              <li className={style.carousel__item}>
                <Image src={results[2].image} width={1440} height={610} />
              </li>
            </ul>
            <div className={style.carousel__prev}>
              <label htmlFor="carousel-1"></label>
              <label htmlFor="carousel-2"></label>
            </div>
            <div className={style.carousel__next}>
              <label htmlFor="carousel-1"></label>
              <label htmlFor="carousel-2"></label>
            </div>
            <div className={style.carousel__nav}>
              <label htmlFor="carousel-1"></label>
              <label htmlFor="carousel-2"></label>
            </div>
          </div>
        </div>
      </div>
    </PagesLayout>
  );
};

export default games;
