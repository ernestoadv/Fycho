/**
 * @packageDocumentation
 * Reset page.
 */
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {Icon} from '../../types/enums';
import Button from '../atoms/button';
import Input from '../atoms/input';
import Template from '../templates/initial';
import useTheme from '../../hooks/useTheme';
import useTranslation from '../../hooks/useTranslation';

/**
 * This page allows the user to recover forgotten credentials.
 * @returns {React.JSX.Element} A React element that renders the Reset Page.
 */
export default function Reset() {
  /**
   * Hooks
   */
  const literals = useTranslation();
  const theme = useTheme();

  /**
   * Styles
   */
  const buttonStyle = {
    container: [
      style.buttonContainer,
      {backgroundColor: theme.reset.button.container},
    ],
    text: [style.buttonText, {color: theme.reset.button.text}],
  };
  const inputStyle = {
    container: [
      style.inputContainer,
      {
        borderColor: theme.reset.input.border,
        backgroundColor: theme.reset.input.container,
        opacity: 1,
      },
    ],
    icon: theme.reset.input.icon,
    input: [style.inputText, {color: theme.reset.input.text}],
    placeholder: theme.reset.input.placeholder,
  };
  const subtitleStyle = [style.subtitleText, {color: theme.reset.subtitle}];
  const titleStyle = [style.titleText, {color: theme.reset.title}];

  /**
   * Element
   */
  return (
    <Template>
      <View style={style.mainContainer}>
        {/* Title and subtitle */}
        <View style={style.titleContainer}>
          <Text style={titleStyle}>{literals.reset.title}</Text>
          <Text style={subtitleStyle}>{literals.reset.subtitle}</Text>
        </View>
        {/* Input fields */}
        <Input
          icon={Icon.Email}
          placeholder={literals.reset.email}
          style={inputStyle}
        />
        {/* Reset button */}
        <Button
          text={literals.reset.button}
          callback={() => {
            console.log('TBD: Call an API');
          }}
          style={buttonStyle}
        />
      </View>
    </Template>
  );
}

const style = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    borderRadius: 20,
    marginBottom: Dimensions.get('screen').height * 0.03,
    marginTop: Dimensions.get('screen').height * 0.03,
    height: Dimensions.get('screen').height * 0.075,
    width: Dimensions.get('screen').width * 0.5,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    alignSelf: 'center',
    borderRadius: 20,
    borderWidth: 2,
    gap: Dimensions.get('screen').width * 0.03,
    padding: 20,
    height: 60,
    width: Dimensions.get('window').width * 0.85,
  },
  inputText: {
    fontSize: 18,
    height: 60,
    width: 260,
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: Dimensions.get('screen').height * 0.03,
  },
  subtitleText: {
    fontSize: 22,
    width: Dimensions.get('screen').width * 0.8,
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
