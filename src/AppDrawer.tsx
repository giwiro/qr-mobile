import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ScannerScreen from './modules/scanner/screen';

const {Navigator, Screen} = createDrawerNavigator();

export default function AppDrawer(): JSX.Element {
  return (
    <Navigator initialRouteName="Scanner">
      <Screen name="Scanner" component={ScannerScreen} />
    </Navigator>
  );
}
