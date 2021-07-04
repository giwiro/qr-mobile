import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {StackNavigationOptions} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {RootState} from '../index';
import {useActions} from '../../utils/react';
import {actions as itemActions} from './duck';

export const options: StackNavigationOptions = {
  title: 'Scan',
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function ItemScreen(): JSX.Element {
  const {reset} = useActions({...itemActions});
  const value = useSelector<RootState, string | undefined>(s => s.item.value);

  useEffect(
    () => () => {
      reset();
    },
    [reset],
  );

  return <View style={style.container}>{value && <Text>{value}</Text>}</View>;
}
