/**
 * @packageDocumentation
 * Login page.
 */
import {Icon} from '../../types/enums';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {setUser} from '../../store/slices/user';
import {useDispatch} from 'react-redux';
import Button from '../atoms/button';
import Input from '../atoms/input';
import Template from '../templates/initial';
import useTranslation from '../../hooks/useTranslation';
import useTheme from '../../hooks/useTheme';
import useNavigation from '../../hooks/useNavigation';

/**
 * Images
 */
const LogoWhite = require('../../assets/images/fycho.png');

/**
 * @returns {React.JSX.Element} A React element that renders the Login Page.
 */
export default function Login() {
  /**
   * Hooks
   */
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const literals = useTranslation();
  const theme = useTheme();

  /**
   * Styles
   */
  const loginButtonStyle = {
    container: [
      style.loginButtonContainer,
      {backgroundColor: theme.login.button.login.container},
    ],
    text: [style.loginButtonText, {color: theme.login.button.login.text}],
  };
  const inputStyle = {
    container: [
      style.inputContainer,
      {
        borderColor: theme.login.input.border,
        backgroundColor: theme.login.input.container,
        opacity: 1,
      },
    ],
    icon: theme.login.input.icon,
    input: [style.inputText, {color: theme.login.input.text}],
    placeholder: theme.login.input.placeholder,
  };
  const resetPasswordButtonStyle = {text: style.resetPasswordText};
  const subtitleStyle = [style.subtitleText, {color: theme.login.subtitle}];
  const titleStyle = [style.titleText, {color: theme.login.title}];

  /**
   * Element
   */
  return (
    <Template>
      <View style={style.mainContainer}>
        {/* App logo */}
        <Image source={LogoWhite} style={style.logo} />
        {/* Title and subtitle */}
        <View style={style.titleContainer}>
          <Text style={titleStyle}>{literals.login.title}</Text>
          <Text style={subtitleStyle}>{literals.login.subtitle}</Text>
        </View>
        {/* Input fields */}
        <Input
          icon={Icon.Email}
          placeholder={literals.login.email}
          style={inputStyle}
        />
        <Input
          icon={Icon.Password}
          placeholder={literals.login.password}
          secure={true}
          style={inputStyle}
        />
        {/* Login button */}
        <Button
          text={literals.login.button}
          style={loginButtonStyle}
          callback={() => {
            console.log('TBD: Call an API');
            dispatch(setUser({token: 'mock'}));
          }}
        />
        {/* Reset password button */}
        <Button
          text={literals.login.resetPassword}
          style={resetPasswordButtonStyle}
          callback={() => {
            navigator.navigate('Reset');
          }}
        />
      </View>
    </Template>
  );
}

const style = StyleSheet.create({
  inputContainer: {
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 2,
    gap: Dimensions.get('screen').width * 0.03,
    padding: Dimensions.get('screen').width * 0.05,
    height: Dimensions.get('screen').height * 0.065,
    width: Math.min(Dimensions.get('window').width * 0.85, 360),
  },
  inputText: {
    fontSize: 18,
    height: Math.min(Dimensions.get('screen').height * 0.065, 60),
    width: Math.min(Dimensions.get('window').width * 0.64, 300),
  },
  loginButtonContainer: {
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: Dimensions.get('screen').height * 0.03,
    marginTop: Dimensions.get('screen').height * 0.03,
    height: Dimensions.get('screen').height * 0.075,
    width: Dimensions.get('screen').width * 0.5,
  },
  loginButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    left: Dimensions.get('screen').width * 0.075,
    marginBottom: Dimensions.get('screen').height * 0.02,
    height: Dimensions.get('screen').height * 0.12,
    width: Dimensions.get('screen').height * 0.12,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: Dimensions.get('screen').height * 0.03,
  },
  resetPasswordText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: 22,
    width: Dimensions.get('screen').width * 0.7,
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: Dimensions.get('screen').height * 0.01,
  },
  titleContainer: {
    left: Dimensions.get('screen').width * 0.075,
    marginBottom: Dimensions.get('screen').height * 0.03,
    width: Dimensions.get('screen').width * 0.85,
  },
});
