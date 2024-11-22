/**
 * @packageDocumentation
 * Reset page.
 */
import {Icon} from '@defs/enums';
import {StyleSheet, Text, View} from 'react-native';
import Button from '@components/atoms/button';
import Input from '@components/atoms/input';
import Template from '@components/templates/access';
import useLiterals from '@hooks/useLiterals';
import useStyle from '@hooks/useStyle';

/**
 * This page allows the user to recover forgotten credentials.
 * @returns {React.JSX.Element} A React element that renders the Reset Page.
 */
export default function Reset() {
  /**
   * Hooks
   */
  const literals = useLiterals();
  const style = useStyle((theme, window) => {
    const {width, landscape} = window;
    return StyleSheet.create({
      /* Containers */
      buttonContainer: {
        alignSelf: 'center',
        backgroundColor: theme.reset.button.container,
        borderRadius: 20,
        height: 50,
        justifyContent: 'center',
        marginVertical: 20,
        paddingHorizontal: 30,
      },
      inputContainer: {
        alignSelf: 'center',
        backgroundColor: theme.reset.input.container,
        borderColor: theme.reset.input.border,
        borderRadius: 20,
        borderWidth: 2,
        gap: 20,
        height: 60,
        paddingLeft: 20,
        paddingVertical: 10,
        width: landscape ? width * 0.3 : width * 0.8,
      },
      mainContainer: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        gap: 30,
        justifyContent: 'center',
      },
      titleContainer: {
        flexDirection: 'column',
        width: landscape ? width * 0.3 : width * 0.8,
      },
      /* Input */
      inputIcon: {
        color: theme.reset.input.icon,
      },
      inputPlaceholder: {
        color: theme.reset.input.placeholder,
      },
      /* Text */
      buttonText: {
        color: theme.reset.button.text,
        fontSize: 22,
        fontWeight: '500',
      },
      inputText: {
        color: theme.reset.input.text,
        fontSize: 18,
        height: 60,
        width: 260,
      },
      subtitleText: {
        color: theme.reset.title,
        fontSize: 22,
      },
      titleText: {
        color: theme.reset.subtitle,
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
      },
    });
  });

  /**
   * Element
   */
  return (
    <Template>
      <View style={style.mainContainer}>
        {/* Title and subtitle */}
        <View style={style.titleContainer}>
          <Text style={style.titleText}>{literals.reset.title}</Text>
          <Text style={style.subtitleText}>{literals.reset.subtitle}</Text>
        </View>
        {/* Input fields */}
        <Input
          icon={{id: Icon.Email, color: style.inputIcon.color}}
          placeholder={literals.reset.email}
          style={{
            container: style.inputContainer,
            input: style.inputText,
            placeholder: style.inputPlaceholder.color,
          }}
        />
        {/* Reset button */}
        <Button
          style={{button: style.buttonContainer, text: style.buttonText}}
          text={literals.reset.button}
          callback={() => {
            console.log('TBD: Call an API');
          }}
        />
      </View>
    </Template>
  );
}
