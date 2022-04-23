import {createIconSetFromIcoMoon} from 'react-native-vector-icons';

import config from './selection.json';
export let CustomIcon = createIconSetFromIcoMoon(
  config,
  'icomoon',
  'icomoon.ttf',
);
