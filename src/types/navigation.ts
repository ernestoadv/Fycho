{
  /* Depends of your Package (Stack or NativeStack...) */
}
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/core';

export type RootStackParamList = {
  Calendar: {id: number} | undefined;
  Home: {id: number} | undefined;
  Initial: {id: number} | undefined;
  Profile: {id: number} | undefined;
};

const navigation =
  useNavigation<NativeStackNavigationProp<RootStackParamList>>();

export default navigation;
