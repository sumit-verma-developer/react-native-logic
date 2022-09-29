/* eslint-disable prettier/prettier */
import {Dimensions, PixelRatio} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const standardWidth = 375;
const standardHeight = 812;
const statusBarHeight = PixelRatio.roundToNearestPixel(
  getStatusBarHeight() * (screenHeight / screenHeight),
);
const bottomBarHeight = PixelRatio.roundToNearestPixel(
  64 * (screenHeight / screenHeight),
);
export const Responsive = {
  width: w => {
    return PixelRatio.roundToNearestPixel(w * (screenWidth / standardWidth));
  },
  height: h => {
    return PixelRatio.roundToNearestPixel(h * (screenHeight / standardHeight));
  },
  font: f => {
    return PixelRatio.roundToNearestPixel(f * (screenWidth / screenWidth));
  },
  screenWidth: () => {
    return screenWidth;
  },
  screenHeight: () => {
    return screenHeight;
  },
  statusBarHeight: () => {
    return statusBarHeight;
  },
  bottomBarHeight: () => {
    return bottomBarHeight;
  },
  vc: h => {
    return PixelRatio.roundToNearestPixel(h * (screenHeight / standardHeight));
  },
};
