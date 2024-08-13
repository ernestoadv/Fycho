/**
 * @packageDocumentation
 * This module defines a hook that returns a custom navigation object overriding the original one
 * as the latter displays an issue when referencing a screen/page. This bug happens in RN > 0.65.
 * Solution can be found in: https://stackoverflow.com/questions/68667766/react-native-typescript-string-is-not-assignable-to-parameter-of-type-never
 */
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/navigation';
import {useNavigation as useNavigationBase} from '@react-navigation/native';

/**
 * @returns An object that allows to navigate throughout different pages.
 */
export default function useNavigation(): NativeStackNavigationProp<RootStackParamList> {
  const navigation =
    useNavigationBase<NativeStackNavigationProp<RootStackParamList>>();
  return navigation;
}
