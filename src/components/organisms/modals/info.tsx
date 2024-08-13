/**
 * @packageDocumentation
 * Information modal.
 */
import {Icon, Modal} from '../../../types/enums';
import {StyleSheet} from 'react-native';
import {setModal} from '../../../store/slices/modal';
import {useDispatch} from 'react-redux';
import Button from '../../atoms/button';
import useTheme from '../../../hooks/useTheme';
import useTranslation from '../../../hooks/useTranslation';

/**
 * This component renders an information modal which displays a list of buttons that redirect to informative modals.
 * @returns {React.JSX.Element} A React element that renders a modal.
 */
export default function Info() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const literals = useTranslation();

  return (
    <>
      <Button
        icon={Icon.Contact}
        style={{
          container: [styles.button, {backgroundColor: theme.button.default}],
        }}
        text={literals.info.contact}
        callback={() => dispatch(setModal(Modal.Contact))}
      />
      <Button
        icon={Icon.ResetPassword}
        style={{
          container: [styles.button, {backgroundColor: theme.button.default}],
        }}
        text={literals.info.resetPassword}
        callback={() => dispatch(setModal(Modal.ResetPassword))}
      />
      <Button
        icon={Icon.Privacy}
        style={{
          container: [styles.button, {backgroundColor: theme.button.default}],
        }}
        text={literals.info.privacy}
        callback={() => dispatch(setModal(Modal.Privacy))}
      />
      <Button
        icon={Icon.Terms}
        style={{
          container: [styles.button, {backgroundColor: theme.button.default}],
        }}
        text={literals.info.terms}
        callback={() => dispatch(setModal(Modal.Terms))}
      />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 280,
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
