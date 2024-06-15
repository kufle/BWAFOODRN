import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Router} from './router';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
