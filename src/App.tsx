import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Router} from './router';
import {Provider} from 'react-redux';
import store from './store';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
