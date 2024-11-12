{
  /* Depends of your Package (Stack or NativeStack...) */
}
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/core';

export type RootStackParamList = {
  Calendar: {id: number} | undefined;
  Home: {id: number} | undefined;
  Login: {id: number} | undefined;
  Reset: {id: number} | undefined;
  Privacy: {id: number} | undefined;
  Profile: {id: number} | undefined;
  Terms: {id: number} | undefined;
};

const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export default navigation;
