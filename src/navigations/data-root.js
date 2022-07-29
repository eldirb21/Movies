import SignIn from '../views/Auth/sign-in';
import Splash from '../views/Auth/splash';
import Movies from '../views/Movies';
import MovieDetail from '../views/Movies/movie-detail';
import Settings from '../views/Settings';
import TabNavigation from './TabNavigation';

const dataRoots = [
  /**DEFAULT SCREEN */
  {
    components: Splash,
    title: 'Splash',
    name: 'Splash',
  },
  {
    components: SignIn,
    title: 'Sign In',
    name: 'SignIn',
  },
  {
    components: TabNavigation,
    title: 'Tab Navigation',
    name: 'TabNavigation',
  },
  {
    components: MovieDetail,
    title: 'Movies Detail',
    name: 'MovieDetail',
  },
];

export const dataTabs = [
  {
    components: Movies,
    title: 'Movies',
    name: 'Movies',
  },
  {
    components: Settings,
    title: 'Settings',
    name: 'Settings',
  },
];
export default dataRoots;
