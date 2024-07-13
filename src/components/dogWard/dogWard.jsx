import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './dogWard.module.css';
import dogOwner from './3756940.jpg';
import { DogWardModal } from '../dogWardModal/dogWardModal';

export const DogWard = () => {
  const { handleDogCalculation, dogQualities, handleInfoClick } = useUser();
  const dogLabels = [
    'Child Friendly',
    'Friedliness with other dogs',
    'Shedding Level',
    'Grooming Difficulty',
    'Drooling Level',
    'Coat length',
    'Stranger Friendly',
    'Playfulness',
    'Protectiveness',
    'Easiness to Train',
    'Energy',
    'Barking Audibility or Vocalization',
  ];
  const getRandomValue = () => {
    const defValue = Math.floor(Math.random() * 5) + 1;
    return defValue;
  }

  return (
    <>
      <DogWardModal />
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
                <form onSubmit={handleDogCalculation} className={css.form}>
                  <span className={css.dataItemDet}>
                    <label htmlFor="threshold">THRESHOLD:</label>
                    <input
                      type="number"
                      id="threshold"
                      name="threshold"
                      defaultValue="5"
                      min="1"
                      max="20"
                    />
                  </span>
                  <div className={css.dataCollector}>
                    {dogQualities.map((quality, qualityIndex) => (
                      <div key={qualityIndex} className={css.dataItemCont}>
                        <label htmlFor={`${qualityIndex}-${quality}`}>
                          {dogLabels[qualityIndex]}:
                        </label>
                        <input
                          type="number"
                          id={`${qualityIndex}-${quality}`}
                          name={quality}
                          min="1"
                          max="5"
                          defaultValue={getRandomValue()}
                        />
                      </div>
                    ))}
                  </div>
                  <button
                    type="submit"
                    className={css.dataSender}
                    onClick={handleInfoClick}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogWard;
