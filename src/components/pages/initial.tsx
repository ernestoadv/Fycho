/**
 * @packageDocumentation
 * Initial page.
 */
import {Modal} from '../../types/enums';
import {setModal} from '../../store/slices/modal';
import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import Template from '../templates/initial';

/**
  This component displays different modals that allow the user to log in, recover a forgotten password, look up for contact information, etc. The first modal to render is the login modal.
 * @returns {React.JSX.Element} A React element that renders the Initial Page.
 */
export default function Initial() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setModal(Modal.Login));
  }, []);
  return <Template />;
}
