/**
 * @packageDocumentation
 * Reset password modal.
 */
import {Icon} from '../../../types/enums';
import {Linking, StyleSheet, Text} from 'react-native';
import Button from '../../atoms/button';
import Input from '../../atoms/input';
import fontStyles from '../../../style/fonts';
import useTheme from '../../../hooks/useTheme';
import useTranslation from '../../../hooks/useTranslation';

/**
 * This component renders a modal that allows users to reset their password when forgotten.
 * @returns {React.JSX.Element} A React element that renders a modal.
 */
export default function ResetPassword() {
  const literals = useTranslation();
  const theme = useTheme();

  return (
    <>
      <Text style={[styles.text, {color: theme.text[theme.modal.text][100]}]}>
        {literals.resetPassword.info}
        <Text
          style={fontStyles.bold}
          onPress={() =>
            Linking.openURL(`mailto:${literals.resetPassword.contact}`)
          }>
          {literals.resetPassword.contact}
        </Text>
      </Text>
      <Input
        icon={Icon.Email}
        placeholder={{text: literals.login.email}}
        style={styles.input}
      />
      <Button
        style={{
          container: [styles.button, {backgroundColor: theme.button.default}],
        }}
        text={literals.resetPassword.send}
      />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    paddingHorizontal: 40,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
  input: {
    borderRadius: 50,
    height: 50,
    paddingHorizontal: 20,
    width: 300,
  },
  text: {
    fontSize: 14,
    textAlign: 'center',
    width: 260,
  },
});
