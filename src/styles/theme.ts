import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    primary: {
      700: '#996DFF'
    },
    secondary: {
      700: '#FBA94C'
    },
    green: {
      700: '#00875F',
      500: '#00B37E',
      300: '#04D361',
    },
    gray: {
      700: '#121214',
      600: '#202024',
      500: '#29292E',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6'
    },
    white: {
      200: '#F0EABE',
      100: '#FFFFFF',
    }      ,
    blue: {
      900: '#03045e',
      800: '#023e8a',
      700: '#0077b6',
      600: '#0096c7',
      500: '#00b4d8',
      400: '#48cae4',
      300: '#90e0ef',
      200: '#ade8f4',
      100: '#caf0f8'
    }
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56
  }
});