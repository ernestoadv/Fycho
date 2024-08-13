/**
 * @packageDocumentation
 * Contact modal.
 */
import {Icon} from '../../../types/enums';
import {Linking, StyleSheet} from 'react-native';
import Button from '../../atoms/button';
import useTheme from '../../../hooks/useTheme';
import useTranslation from '../../../hooks/useTranslation';

/**
 * This component renders a contact modal which displays useful contact information.
 * @returns {React.JSX.Element} A React element that renders a modal.
 */
export default function Contact() {
  const theme = useTheme();
  const literals = useTranslation();

  return (
    <>
      <Button
        icon={Icon.Email}
        style={{
          container: [styles.button, {backgroundColor: theme.button.light}],
        }}
        text={literals.contact.email}
        callback={() => Linking.openURL(`mailto:${literals.contact.email}`)}
      />
      <Button
        icon={Icon.Phone}
        style={{
          container: [styles.button, {backgroundColor: theme.button.light}],
        }}
        text={literals.contact.phone}
        callback={() => Linking.openURL(`tel:${literals.contact.phone}`)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 240,
  },
  content: {
    fontSize: 16,
    marginHorizontal: 30,
    paddingHorizontal: 10,
  },
  tabs: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});
