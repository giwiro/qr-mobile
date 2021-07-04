﻿import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import {configureStore} from '@reduxjs/toolkit';
import ScannerScreen, {
  options as scannerOptions,
} from './modules/scanner/screen';
import ItemScreen, {options as itemOptions} from './modules/item/screen';
import {rootReducer} from './modules';

const {Navigator, Screen} = createStackNavigator();

const navigatorTheme: Theme = {
  ...DefaultTheme,
  colors: {...DefaultTheme.colors, primary: 'red'},
};

const store = configureStore({reducer: rootReducer});

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer theme={navigatorTheme}>
        <Navigator>
          <Screen
            name="Scanner"
            component={ScannerScreen}
            options={scannerOptions}
          />
          <Screen name="Item" component={ItemScreen} options={itemOptions} />
        </Navigator>
      </NavigationContainer>
    </Provider>
  );
}
