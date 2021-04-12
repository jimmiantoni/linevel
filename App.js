import React from 'react';
import { LogBox, StatusBar } from 'react-native';  
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'; 
import Container from './src/screens/Container';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreAllLogs();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#C61D30',
    accent: 'yellow',
  },
}

export default class App extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  async componentDidMount() { 
    SplashScreen.hide(); 
  }

  render() { 
      return ( 
        <PaperProvider theme={theme}>
          <StatusBar backgroundColor='#0183FA' barStyle="light-content" />
          <Container /> 
        </PaperProvider>
      );
  }
}