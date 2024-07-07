//import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './Library.module.css';
//import { VotingApp } from '../VotingApp/VotingApp';
import dogOwner from './3756940.jpg';
import { LibraryModal } from '../LibraryModal/LibraryModal';

export const Library = () => {
  //const { handleCalculation, handleInfoClick } = useUser();
  return (
    <>
      <LibraryModal />
      <div>
        <span className={css.titleContainer}>
          <span className={css.iconContainer}>
            <img
              src={dogOwner}
              className={css.icon}
              style={{ width: '100px' }}
              alt=""
            />
          </span>
          <span>
            <span className={css.title}>Welcome to the Dog Ward</span>
            <span className={css.movieGallerySlogan}>
              {' '}
              <i>Fetch your furry soulmate with Precision!</i>{' '}
            </span>
          </span>
          <span className={css.iconContainer}>
            <img
              src={dogOwner}
              className={css.iconTwo}
              style={{ width: '100px' }}
              alt=""
            />
          </span>
        </span>

        <div className={css.galleryFrame}>
          <div className={css.dataAreaCont}>
            <div className={css.dataAreaIntro}>
              <div>
                With our state-of-the-art filtering algorithm, finding the
                perfect pet has never been easier or more accurate. Say goodbye
                to endless searching and uncertainty, and hello to a
                scientifically driven, user-centric approach that guarantees the
                best match for your lifestyle.
              </div>
              <div>
                Join us in revolutionizing the pet adoption experience. Discover
                the unparalleled precision of the Weighted Euclidean Distance
                algorithm and embark on your journey to find the pet that truly
                complements your life.
              </div>
              <div>
                Your perfect pet match is just a click away. Embrace the future
                of pet pairing with our cutting-edge algorithm today!
              </div>
            </div>
            <div className={css.dataArea}>
              <div className={css.dataAreaInfo}>
                Development of the Dog Ward is in progress, collecting data.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Library;
