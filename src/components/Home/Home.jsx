import css from './Home.module.css';
import { Link } from 'react-router-dom';
import { Loader } from '../InitLoader/Loader';
import { selectVotes } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import { useEffect } from 'react';
import homeAnimation from './heart.png';
import catWardPic from './cat owner.jpg';
import dogWardPic from './3756940.jpg';
import petTubePic from './5664315.jpg';

export const Home = () => {

  let {
    /*countTotalFeedback,
    scoobyWins,
    goofyWins,
    brianWins,
    setScoobyWins,
    setGoofyyWins,
    setBrianWins,*/
    isOneHovered,
    isTwoHovered,
    isThreeHovered,
    setIsOneHovered,
    setIsTwoHovered,
    setIsThreeHovered
  } = useUser();

/*
frame2.addEventListener('mouseover', () => {
  frame1.style.transform = 'translateY(103%)';
});

frame2.addEventListener('mouseout', () => {
  frame1.style.transform = 'translateY(0)';
});

frame2.addEventListener('focus', () => {
  frame1.style.transform = 'translateY(103%)';
});

frame2.addEventListener('blur', () => {
  frame1.style.transform = 'translateY(0)';
});
*/


  return (
    <main>
      <span className={css.movieGalleryLabel}>
        <img
          src={homeAnimation}
          alt="Love"
          width="100"
          className={css.movieGalleryAnimation}
        />
        <span>
          <span className={css.movieGalleryTitle}>Welcome To Petpal</span>
          <span className={css.movieGallerySlogan}>
            {' '}
            <i>Helping you find your Furry Soulmate</i>{' '}
          </span>
        </span>
        <img
          src={homeAnimation}
          alt="Love"
          width="100"
          className={css.movieGalleryAnimation}
        />
      </span>
      <h3 className={css.townOfficialsIntro}>Get to know our Facility</h3>
      <div className={css.galleryFrame}>
        <Loader />
        <div className={css.movieGallery}>
          <div
            className={css.frame}
            onMouseEnter={() => {
              setIsOneHovered(true);
            }}
            onMouseLeave={() => {
              setIsOneHovered(false);
            }}
            style={{
              transform: `
    ${isTwoHovered ? 'translateY(110%)' : 'translateY(0)'}
    ${isThreeHovered ? 'translateX(-30%)' : 'translateX(0)'}
  `,
            }}
          >
            <div
              key="townMayor"
              className={css.movieItem}
              onClick={() => {
                setIsOneHovered(false);
              }}
            >
              <Link to="/town_hall" className={css.movieInfo}>
                <div className={css.catOverlay}>
                  <img
                    className={css.movieImage}
                    src={catWardPic}
                    alt="Unavailable"
                  />
                  <p className={css.catWardDescription}>
                    Presenting Mayor Goofy, the dynamic leader of Canine-Cove, a
                    radiant metropolis brimming with canine camaraderie. With a
                    heart as boundless as the sunny skies above, Mayor Goofy, a
                    former Army General, has dedicated himself to uplifting the
                    spirits of his fellow residents.
                  </p>
                </div>
                <span className={css.movieName}>
                  <span className={css.wardName}>Cat Ward</span>
                </span>
              </Link>
            </div>
          </div>
          <div
            className={css.frame}
            onMouseEnter={() => {
              setIsTwoHovered(true);
            }}
            onMouseLeave={() => {
              setIsTwoHovered(false);
            }}
            style={{
              transform: `
    ${isOneHovered ? 'translateY(110%)' : 'translateY(0)'}
    ${isThreeHovered ? 'translateX(30%)' : 'translateX(0)'}
  `,
            }}
          >
            <div
              key="townLibrarian"
              className={css.movieItem}
              onClick={() => {
                setIsTwoHovered(false);
              }}
            >
              <Link to="/Library" className={css.movieInfo}>
                <div className={css.catOverlay}>
                  <img
                    className={css.movieImage}
                    src={dogWardPic}
                    alt="Unavailable"
                  />
                  <p className={css.catWardDescription}>
                    Mr. Snoopy, with his boundless energy and infectious
                    enthusiasm, has transformed the town's library into a
                    vibrant hub of activity. Every corner bursts with color and
                    creativity, from the whimsical reading nooks to the
                    interactive storytelling corners.
                  </p>
                </div>
                <span className={css.movieName}>
                  <span className={css.wardName}>Dog Ward</span>
                </span>
              </Link>
            </div>
          </div>
          <div
            className={css.frame}
            onMouseEnter={() => {
              setIsThreeHovered(true);
            }}
            onMouseLeave={() => {
              setIsThreeHovered(false);
            }}
            style={{
              transform:
                `
      ${isOneHovered ? 'translateX(-55%)' : ''}
      ${isTwoHovered ? 'translateX(55%)' : ''}
    `.trim() || 'translateX(0)',
            }}
          >
            <div
              key="townPhotographer"
              className={css.movieItem}
              onClick={() => {
                setIsThreeHovered(false);
              }}
            >
              <Link to="/gallery" className={css.movieInfo}>
                <div className={css.catOverlay}>
                  <img
                    className={css.movieImage}
                    src={petTubePic}
                    alt="Unavailable"
                  />
                  <p className={css.catWardDescription}>
                    Courage the Canine Clicker, the town’s beloved photographer,
                    has an eye for capturing the most heartwarming moments. His
                    cozy gallery, adorned with playful backdrops and twinkling
                    lights, is always bustling with wagging tails and joyful
                    barks.
                  </p>
                </div>
                <span className={css.movieName}>
                  <span className={css.wardName}>PetTube</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};



export default Home;
