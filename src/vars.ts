import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export default {
  text: {
    ...Platform.select({
      ios: {fontFamily: 'San Francisco'},
      android: {fontFamily: 'Roboto'},
    }),
  },
  width,
  height,
};
