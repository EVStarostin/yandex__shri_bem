import ac_white from './ac-white.svg';
import battery from './battery.svg';
import cam_white from './cam-white.svg';
import fridge from './fridge.svg';
import kettle from './kettle.svg';
import key from './kettle.svg';
import music from './music.svg';
import robot_cleaner from './robot-cleaner.svg';
import router from './router.svg';
import stats from './stats.svg';
import thermal from './thermal.svg';

interface ImagesValues { 
  [image: string]: string;
};

const images: ImagesValues = {
  ac_white, battery, cam_white, fridge, kettle, key, music, router, stats, thermal,
  'robot-cleaner': robot_cleaner,
};

export default images;
