import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { useEffect } from 'react';
import { useUser } from '../CustomProviderComponent/CustomProviderComponent';


const Home = lazy(() => import('../Home/Home'));
const Library = lazy(() => import('../Library/Library'));
const Gallery = lazy(() => import('../Gallery/Gallery'));
const TownHall = lazy(() => import('../TownHall/TownHall'));

export const App = () => {
  const { initialApiCall } = useUser();


  useEffect(() => {
    initialApiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="dog_ward" element={<Library />} />
        <Route path="pet_tube" element={<Gallery />} />
        <Route path="cat_ward" element={<TownHall />} />
      </Route>
    </Routes>
  );
};

