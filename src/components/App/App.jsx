import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchVotes } from '../../redux/operations';
import { useUser } from '../CustomProviderComponent/CustomProviderComponent';


const Home = lazy(() => import('../Home/Home'));
const MovieDetails = lazy(() => import('../MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Cinema = lazy(() => import('../Cinema/Cinema'));
const Library = lazy(() => import('../Library/Library'));
const Gallery = lazy(() => import('../Gallery/Gallery'));
const TownHall = lazy(() => import('../TownHall/TownHall'));

export const App = () => {
  const { initialApiCall } = useUser();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchVotes());
  }, [dispatch]);

  useEffect(() => {
    initialApiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="cinema/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
        <Route path="cinema" element={<Cinema />} />
        <Route path="Library" element={<Library />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="town_hall" element={<TownHall />} />
      </Route>
    </Routes>
  );
};

