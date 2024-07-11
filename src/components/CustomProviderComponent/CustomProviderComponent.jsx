import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { fetchBreeds } from '../API/Api';
import { fetchDogByBreed } from '../API/Api';
import { startSrch } from '../API/Api';
import { loadSrch } from '../API/Api';
import Notiflix from 'notiflix';
import { useMemo } from 'react';


const UserContext = createContext();

export const useUser = () => useContext(UserContext);


export const UserProvider = ({ children }) => {

  const [isLoading, setLoadingStatus] = useState();
  const [isOpen, setIsOpen] = useState();
  const [breedList, setBreedList] = useState([]);
  const [showCatInfo, setCatInfo] = useState();
  const [initLoaded, setInitLoader] = useState();
  const [resultsAmount, setResultsAmount] = useState();
  const [fewResponse, setResponseStatus] = useState();
  const [pageItems, setPageItems] = useState();
  const [pageNums, setPageNums] = useState(87);
  const [didUserSearch, setSearchStatus] = useState();
  const [petTubeVideos, setPetTubeVideos] = useState([]);
  const [catPageNums, setCatPageNums] = useState();
  const [galleryLoaded, setGalleryLoader] = useState();
  const [toggleSign, setToggleSign] = useState();
  let [chger, setChger] = useState(0);
  
  let [dogBreedId, setDogBreedId] = useState();
  const [dogBreedInfo, setDogBreedInfo] = useState({});
  const [dogImage, setDogImage] = useState();
  const [dogId, setDogId] = useState();
  const [isOneHovered, setIsOneHovered] = useState(false);
  const [isTwoHovered, setIsTwoHovered] = useState(false);
  const [isThreeHovered, setIsThreeHovered] = useState(false);
  const [initalSearchTerm, setInitalSearchTerm] = useState(
    'Cute Pets'
  );
  const [searchTerm, setSearchTerm] = useState();
  const [matchRay, setMatchRay] = useState([]);
  const [matchInfo, setMatchInfo] = useState();
  

  const getThreshold = evt => {
    const form = evt.target;
    return Number(form.elements['threshold'].value)
  }
  
  const getUserPreferences = evt => {
    const form = evt.target;
    return {
      adaptability: Number(form.elements['adaptability'].value),
      affection_level: Number(form.elements['affection_level'].value),
      child_friendly: Number(form.elements['child_friendly'].value),
      dog_friendly: Number(form.elements['dog_friendly'].value),
      energy_level: Number(form.elements['energy_level'].value),
      experimental: Number(form.elements['experimental'].value),
      grooming: Number(form.elements['grooming'].value),
      hairless: Number(form.elements['hairless'].value),
      health_issues: Number(form.elements['health_issues'].value),
      hypoallergenic: Number(form.elements['hypoallergenic'].value),
      indoor: Number(form.elements['indoor'].value),
      intelligence: Number(form.elements['intelligence'].value),
      natural: Number(form.elements['natural'].value),
      rare: Number(form.elements['rare'].value),
      shedding_level: Number(form.elements['shedding_level'].value),
      short_legs: Number(form.elements['short_legs'].value),
      social_needs: Number(form.elements['social_needs'].value),
      stranger_friendly: Number(form.elements['stranger_friendly'].value),
      suppressed_tail: Number(form.elements['suppressed_tail'].value),
      vocalisation: Number(form.elements['vocalisation'].value),
    };
  };


 const handleCalculation = (evt) => {
  evt.preventDefault();
const userPref = getUserPreferences(evt);
  const calculateDistance = (breed, anObj, weights) => {
    let sum = 0;
    for (let attribute in weights) {
      if (weights.hasOwnProperty(attribute)) {
        const breedValue = breed[attribute];
        const userValue = anObj[attribute];
        const weight = weights[attribute];
        console.log(`Attribute: ${attribute}, Breed Value: ${breedValue}, User Value: ${userValue}, Weight: ${weight}`);
        if (typeof breedValue === 'undefined' || typeof userValue === 'undefined') {
          console.error(`Undefined value for attribute: ${attribute}`);
        } else {
          sum += weight * Math.pow(userValue - breedValue, 2);
        }
      }
    }
    return Math.sqrt(sum);
  };
   const weights = {
     adaptability: 1,
     affection_level: 1,
     child_friendly: 1,
     dog_friendly: 1,
     energy_level: 1,
     experimental: 1,
     grooming: 1,
     hairless: 1,
     health_issues: 1,
     hypoallergenic: 1,
     indoor: 1,
     intelligence: 1,
     natural: 1,
     rare: 1,
     shedding_level: 1,
     short_legs: 1,
     social_needs: 1,
     stranger_friendly: 1,
     suppressed_tail: 1,
     vocalisation: 1,
   };



  const bestBreeds = breedList
    .map(breed => {
      return {
        breed,
        distance: calculateDistance(breed, userPref, weights),
      };
    })
    .sort((a, b) => a.distance - b.distance)
    .map(breedWithDistance => breedWithDistance.breed);

  const threshold = getThreshold(evt); // Adjust this value as needed
  const matches = bestBreeds.filter(
    breed => calculateDistance(breed, userPref, weights) <= threshold
  );
   setMatchRay([...matches]);
  console.log(`Number of matches: ${matches.length}`);
  console.log(matches);
  console.log(userPref);
  //console.log(bestBreeds);
};



  const makingTrue = () => {
    setToggleSign(true);
  };

  const makingFalse = () => {
    setToggleSign(false)
  }

  

   const memoizedResponse = useMemo(
    () => startSrch(initalSearchTerm),
    [initalSearchTerm])

   const initialApiCall = () => {
     setGalleryLoader(true);
     memoizedResponse
       .then(users => {
         const response = users.hits;
         const totalResponse = response.totalHits;
         setPetTubeVideos([...response]);
         setSearchTerm(initalSearchTerm);
         setPageNums(1);
         setPageItems(12);
         setSearchStatus(true);
         setResultsAmount(totalResponse);
         setTimeout(() => {
           setGalleryLoader(false);
         }, 2000);
       })
       .catch(error => {
         Notiflix.Notify.failure(
           'Oops! Something went wrong! Try reloading the page!'
         );
         setGalleryLoader(false);
         console.error(`Error message ${error}`);
       });
   };

  const handleSubmit = evt => {
    setGalleryLoader(true);
     evt.target[1].style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
     setTimeout(() => {
       evt.target[1].style.boxShadow =
         '0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 10px 12px -6px rgba(0, 0, 0, 0.4)';
     }, 2000);
    evt.preventDefault();
    const { value } = evt.target[0];
    startSrch(value)
      .then(response => {
        const ans = response.hits;
        const totalResponse = response.totalHits;
  
      if (totalResponse !== 0) {
        Notiflix.Notify.success(
          `Hooray! We found ${response.totalHits} videos.`
        );
      }
      if (totalResponse === 0) {
        Notiflix.Notify.warning(
          'Sorry, there are no Videos matching your search query. Please try again.'
        );
      }
      if (totalResponse <= 12 && totalResponse !== 0) {
        Notiflix.Notify.warning(
          "We're sorry, but you've reached the end of search results."
        );
        setResponseStatus(true); //If page is not refreshed this stays true(even when false), hence the need for the else{}
      } else {
        setResponseStatus(false);
      }

        setPetTubeVideos([...ans]);
        setSearchTerm(value);
        setPageNums(1);
        setPageItems(12);
        setSearchStatus(true);
        setResultsAmount(totalResponse);

        setTimeout(() => {
          setGalleryLoader(false);
        }, 2000);
        setCatPageNums(1);

        console.log(response);
        
      })
      .catch(error => {
          Notiflix.Notify.failure(
            'Oops! Something went wrong! Try reloading the page!'
          );
        setGalleryLoader(false);
        console.error(`Error message ${error}`);
      });
  }

  const handleGalleryButtonPress = evt => {
    setGalleryLoader(true);
    evt.target.style.boxShadow = 'inset 0 0 10px 5px rgba(0, 0, 0, 0.3)';
    setTimeout(() => {
      evt.target.style.boxShadow =
        '0px 4px 6px -1px rgba(0, 0, 0, 0.3), 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 10px 12px -6px rgba(0, 0, 0, 0.4)';
    }, 2000);

    let storageVar = pageNums;
    storageVar += 1;
    let storageVarItems = pageItems;
    storageVarItems += 12;
 
    if (storageVarItems >= resultsAmount) {
      Notiflix.Notify.warning(
        "We're sorry, but you've reached the end of search results."
      );

      setResponseStatus(true);
    }
    setLoadingStatus(true);

    loadSrch(searchTerm ? searchTerm : initalSearchTerm, storageVar)
      .then(users => {
        const response = users.hits;

        setPetTubeVideos([...petTubeVideos, ...response]);
        setPageNums(storageVar);
        setPageItems(storageVarItems);

        setTimeout(() => {
          setGalleryLoader(false);
        }, 2000);
      })
      .catch(error => {
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
        setGalleryLoader(false);
        console.error(`Error message ${error}`);
      });
  };


  useEffect(() => {
    setInitLoader(true);
    fetchBreeds()
      .then(response => {
        if (!response.ok) {
          
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        setBreedList([...response]);
        setInitLoader(false);
        //console.log(response);
        //const ids = response.map((res) => { return res.id });
        //console.log(ids);
        //setidsArray([...ids]);
      })
      .catch(error => {
        setInitLoader(false);
        console.error(`Error message ${error}`);
      });
  }, []);



    useEffect(() => {
      //setInitLoader(true);
      fetchBreeds()
        .then(response => {
          if (!response.ok) {
            /*loaderMsg.classList.add('hide');
            errorMsg.classList.remove('hide');*/
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(response => {
          //setBreedList([...response]);
          const myObj = response.find(item => item.name === dogBreedId);
          setDogBreedInfo({ ...myObj });
          //setInitLoader(false);
          //console.log(response.find(item => item.name === dogBreedId));
          
        })
        .catch(error => {
          //setInitLoader(false);
          console.error(`Error message ${error}`);
        });
    }, [dogBreedId]);

  useEffect(() => {
    setLoadingStatus(true);
    fetchDogByBreed(dogId)
      .then(response => {
        if (!response.ok) {
         
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(response => {
        setDogImage(response[0].url);
        //console.log(response);
        setTimeout(() => { setLoadingStatus(false) }, 1500);
        
      })
      .catch(error => {
        setLoadingStatus(false);
        console.error(`Error message ${error}`);
      });
  }, [dogId]);






  const handlePlayClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(undefined);
  };

  const handleInfoClick = evt => {
   
    //setDogBreedId(evt.currentTarget.dataset.id2);
    
    //setDogId(Number(evt.currentTarget.dataset.id1));
    //setCatInfo(true);
    setMatchInfo(true);

    
  };

  const handleInfoClose = () => {
    //setCatInfo(undefined);
    setMatchInfo(undefined);
  };

  return (
    <UserContext.Provider
      value={{
        isLoading,
        handlePlayClick,
        isOpen,
        handleClose,
        breedList,
        showCatInfo,
        handleInfoClick,
        handleInfoClose,
        initLoaded,
        fewResponse,
        setSearchStatus,
        didUserSearch,
        petTubeVideos,
        handleGalleryButtonPress,
        galleryLoaded,
        toggleSign,
        makingTrue,
        makingFalse,
        chger,
        setChger,
        setToggleSign,
        dogBreedInfo,
        dogImage,
        isOneHovered,
        isTwoHovered,
        isThreeHovered,
        setIsOneHovered,
        setIsTwoHovered,
        setIsThreeHovered,
        initialApiCall,
        handleSubmit,
        handleCalculation,
        setInitalSearchTerm,
        matchRay,
        matchInfo,
        setCatInfo,
        catPageNums,
        setDogBreedId,
        setDogId,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
