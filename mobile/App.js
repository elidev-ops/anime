import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './src/routes';

// import { Container } from './styles';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#19181f" />
      <Routes />
    </>
  );
};

export default App;
