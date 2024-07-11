import { useUser } from '../CustomProviderComponent/CustomProviderComponent';
import css from './catWardModal.module.css';
import svg from '../SharedLayout/icons.svg';


export const LibraryModal = () => {
  const {
    handleInfoClose,
    matchInfo,
    matchRay,
  } = useUser();

  //console.log(dogBreedInfo);
  

  return (
    <>
      {matchInfo !== undefined && (
        <div className={css.overlay}>
          <button className={css.closeModal} onClick={handleInfoClose}>
            <svg width="20px" height="20px" className={css.modalIcon}>
              <use href={`${svg}#icon-cross`}></use>
            </svg>
          </button>
          <div className={css.galleryFrame}>
            <div className={css.modal}>
              {matchRay.length !== 0 ? (
                <div className={css.matchListArea}>
                  <h2 className={css.matchListContTitle}>
                    Congrats, you have {matchRay.length} matches
                  </h2>
                  <div className={css.matchListCont}>
                    <div className={css.matchList}>
                      {matchRay.map(match => (
                        <div className={css.matchListItem}>
                          <div className={css.matchItemOverlay}>
                            {match.image &&
                              <img
                              src={match.image.url}
                              alt="Pet"
                              width="450px"
                              className={css.matchImage}
                            />}
                            <div className={css.matchDescription}>
                              <div className={css.matchDescriptionItem}>
                                Adaptability:{match.adaptability}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Affection Level:{match.affection_level}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Child Friendly:{match.child_friendly}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Dog Friendly:{match.dog_friendly}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Energy Level:{match.energy_level}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Experimental:{match.experimental}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Grooming:{match.grooming}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Hairless:{match.hairless}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Health Issues:{match.health_issues}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Hypoallergenic:{match.hypoallergenic}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Indoor:{match.indoor}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Intelligence:{match.intelligence}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Natural:{match.natural}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Rare:{match.rare}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Shedding Level:{match.shedding_level}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Short Legs:{match.short_legs}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Social Needs:{match.social_needs}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Stranger Friendly:{match.stranger_friendly}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Suppressed Tail:{match.suppressed_tail}
                              </div>
                              <div className={css.matchDescriptionItem}>
                                Vocalisation:{match.vocalisation}
                              </div>
                            </div>
                          </div>
                          <p className={css.matchItemName}>{match.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className={css.noMatchArea}>
                  <h2 className={css.noMatchSign}>
                    No matches, try increasing the threshold value.
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};


