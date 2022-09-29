
/* eslint-disable prettier/prettier */
import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {

  white: '#FFFFFF',
  redText: '#E01315',
  Black: '#252525',
  blueText: '#005CE7',
  placeHolderColor: '#989898',
  lightGreyColor: '#C1C1C1',
  Orange: '#F88009',
  darkGrey: "#5C5C5C",
  greenAppColor: '#2B7A0B',
  backgroundColor: '#E5E5E5',
  textInputBackground: '#F8F8F9',
  grey: '#757575',
  lightGrey:'#989898',
  lightyellowColor:'#F9F9C5',
  

};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  paddingExtraLarge: 48,
  paddingLarge: 34,
  paddingMedium: 30,
  padding1: 28,
  padding2: 24,
  padding3: 22,
  padding4: 20,
  padding5: 18,
  padding6: 16,

  // font sizes
  largeTitle: 36,
  header: 24,
  buttonText: 22,
  h1: 20,
  h2: 18,
  h3: 16,
  h4: 14,
  h5: 12,
  h6: 10,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  Poppins400: 'Poppins-Regular',
  Poppins500: 'Poppins-Medium',
  Poppins600: 'Poppins-SemiBold',
  Poppins700: 'Poppins-Bold',
  Poppins800: 'Poppins-ExtraBold',
  Poppins900: 'Poppins-Black',
};

export const CornerRadius ={
  button: 26
}

export const ComponentHeights = {
  button : 58
}

const appTheme = {COLORS, SIZES, FONTS, CornerRadius, ComponentHeights};

export default appTheme;
