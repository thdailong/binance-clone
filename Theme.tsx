// 1. Import the extendTheme function
import {extendTheme} from 'native-base';
// 2. Extend the theme to include custom colors, fonts, etc

const appColors = {
  background: '#161A1E', // rgba(22, 26, 30, 1)
};

const newColorTheme = {
  brand: {
    900: '#8287af',
    800: '#7c83db',
    700: '#b3bef6',
  },
  appColors,
  gray: {
    300: '#848E9C', // rgba(132, 142, 156, 1)
  },
};
const Theme = extendTheme({
  colors: newColorTheme,
  config: {
    initialColorMode: 'dark',
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'md',
      },
    },
    Text: {
      baseStyle: {
        color: 'white',
      },
    },
  },
});
export default Theme;
