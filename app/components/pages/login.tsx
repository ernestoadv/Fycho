/**
 * @packageDocumentation
 * Login page.
 */
import {Image, StyleSheet, Text, View} from 'react-native';
import {Icon} from '@defs/enums';
import {setUser} from '@store/slices/user';
import {useDispatch} from 'react-redux';
import {useNavigation} from 'expo-router';
import Button from '@components/atoms/button';
import Input from '@components/atoms/input';
import Template from '@components/templates/access';
import useLiterals from '@hooks/useLiterals';
import useStyle from '@/app/hooks/useStyle';

/**
 * Images
 */
const LogoWhite = require('@assets/media/images/logo.clear.png');

/**
 * @returns {React.JSX.Element} A React element that renders the Login Page.
 */
export default function Login() {
  /**
   * Hooks
   */
  const dispatch = useDispatch();
  const navigator = useNavigation();
  const literals = useLiterals();
  const style = useStyle((theme, window) => {
    const {width, landscape} = window;
    return StyleSheet.create({
      /* Containers */
      bottomContainer: {
        alignContent: landscape ? 'center' : 'flex-start',
        justifyContent: landscape ? 'center' : 'flex-start',
        flex: landscape ? 3 : 6,
        flexDirection: 'column',
        gap: 20,
      },
      buttonContainer: {
        alignSelf: 'center',
        backgroundColor: theme.login.button.login.container,
        borderRadius: 20,
        justifyContent: 'center',
        height: 50,
        marginVertical: 20,
        paddingHorizontal: 30,
      },
      inputContainer: {
        alignSelf: 'center',
        borderColor: theme.login.input.border,
        backgroundColor: theme.login.input.container,
        borderRadius: 20,
        borderWidth: 2,
        gap: 20,
        height: 60,
        paddingLeft: 20,
        paddingVertical: 10,
        width: landscape ? width * 0.3 : width * 0.8,
      },
      mainContainer: {
        flex: 1,
        flexDirection: landscape ? 'row' : 'column',
      },
      middleContainer: {
        flex: landscape ? 0 : 1,
      },
      titleContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
      },
      topContainer: {
        alignItems: landscape ? 'center' : 'center',
        gap: 20,
        flex: landscape ? 3 : 4,
        flexDirection: 'column',
        justifyContent: landscape ? 'center' : 'flex-end',
      },
      /* Input */
      inputIcon: {
        color: theme.login.input.icon,
      },
      inputPlaceholder: {
        color: theme.login.input.placeholder,
      },
      /* Logos */
      appLogo: {
        height: 75,
        width: 75,
      },
      /* Text */
      buttonText: {
        color: theme.login.button.login.text,
        fontWeight: '500',
        fontSize: 22,
      },
      inputText: {
        color: theme.login.input.text,
        fontSize: 18,
        height: 40,
        width: 300,
      },
      resetPasswordText: {
        color: theme.login.button.reset.text,
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
      },
      subtitleText: {
        color: theme.login.subtitle,
        fontSize: 20,
      },
      titleText: {
        color: theme.login.title,
        fontSize: 56,
        fontWeight: 'bold',
      },
    });
  });

  /**
   * Elements
   */
  return (
    <Template>
      <View style={style.mainContainer}>
        {/* Top or left container */}
        <View style={style.topContainer}>
          {/* Title and logo container */}
          <View style={style.titleContainer}>
            {/* App logo */}
            <Image source={LogoWhite} style={style.appLogo} />
            {/* Title and subtitle */}
            <Text style={style.titleText}>{literals.login.title}</Text>
          </View>
          <Text style={style.subtitleText}>{literals.login.subtitle}</Text>
        </View>
        <View style={style.middleContainer}></View>
        {/*  Bottom or right container */}
        <View style={style.bottomContainer}>
          {(() => {
            const inputStyle = {
              container: style.inputContainer,
              input: style.inputText,
              placeholder: style.inputPlaceholder.color,
            };
            return (
              <>
                <Input
                  icon={{id: Icon.Email, color: style.inputIcon.color}}
                  placeholder={literals.login.email}
                  style={inputStyle}
                />
                <Input
                  icon={{id: Icon.Password, color: style.inputIcon.color}}
                  placeholder={literals.login.password}
                  secure={true}
                  style={inputStyle}
                />
              </>
            );
          })()}
          {/* Login button */}
          <Button
            style={{
              button: style.buttonContainer,
              text: style.buttonText,
            }}
            text={literals.login.button}
            callback={() => {
              console.log('TBD: Call an API');
              dispatch(setUser({token: 'mock'}));
            }}
          />
          {/* Reset password button */}
          <Button
            style={{text: style.resetPasswordText}}
            text={literals.login.resetPassword}
            callback={() => {
              navigator.navigate('Reset' as never);
            }}
          />
        </View>
      </View>
    </Template>
  );
}
