import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Router} from './router';
import {Provider, useSelector} from 'react-redux';
import store, {RootState} from './store';
import FlashMessage from 'react-native-flash-message';
import {Loading} from './components/molecules';

function MainApp(): React.JSX.Element {
  const {isLoading} = useSelector((state: RootState) => state.global);
  return (
    <NavigationContainer>
      <Router />
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </NavigationContainer>
  );
}

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}

export default App;
