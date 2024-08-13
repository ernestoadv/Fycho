/**
 * @packageDocumentation
 * This module selects and renders an specific modal.
 */
import {MODAL_HEIGHT} from '../types/consts';
import {Icon, Modal as ModalList, Policy} from '../types/enums';
import {modalSelector, setParams} from '../store/slices/modal';
import {useDispatch, useSelector} from 'react-redux';
import {useMemo} from 'react';

// Components
import Button from '../components/molecules/buttons/navigation';
import Modal from '../components/atoms/modal';

// Modals
import ContactModal from '../components/organisms/modals/contact';
import InfoModal from '../components/organisms/modals/info';
import LoginModal from '../components/organisms/modals/login';
import ResetPasswordModal from '../components/organisms/modals/resetPassword';
import PoliciesModal from '../components/organisms/modals/policies';

// Buttons

/**
 * This interface defines the properties that a modal can receive.
 */
export interface ModalData {
  modal?: {
    /**
     * The maximum height that a modal can grow up to.
     */
    height: number;
    /**
     * The modal to render.
     */
    Component: () => React.JSX.Element;
  };
  button?: {
    /**
     * The icon to display
     */
    icon?: Icon;
    /**
     * The modal to navigate to
     */
    modal?: ModalList;
  };
}

/**
 * This component renders a modal as defined by the corresponding store selector.
 * @returns {React.JSX.Element} A React element that renders a modal.
 */
export default function ModalManager() {
  /**
   * Get current modal component and associated button information
   */
  const dispatch = useDispatch();
  const {modal: currentModal} = useSelector(modalSelector);
  const {button, modal} = useMemo<ModalData>(() => {
    switch (currentModal) {
      case ModalList.Contact:
        return {
          button: {
            icon: Icon.Back,
            modal: ModalList.Info,
          },
          modal: {
            height: MODAL_HEIGHT.SMALL,
            Component: ContactModal,
          },
        };
      case ModalList.Info:
        return {
          button: {
            icon: Icon.Back,
            modal: ModalList.Login,
          },
          modal: {
            height: MODAL_HEIGHT.MEDIUM,
            Component: InfoModal,
          },
        };
      case ModalList.Login:
        return {
          button: {
            icon: Icon.Info,
            modal: ModalList.Info,
          },
          modal: {
            height: MODAL_HEIGHT.SMALL,
            Component: LoginModal,
          },
        };
      case ModalList.Privacy:
        setTimeout(() => {
          dispatch(setParams({policy: Policy.Privacy}));
        });
        return {
          button: {
            icon: Icon.Back,
            modal: ModalList.Info,
          },
          modal: {
            height: MODAL_HEIGHT.BIG,
            Component: PoliciesModal,
          },
        };
      case ModalList.ResetPassword:
        return {
          button: {
            icon: Icon.Back,
            modal: ModalList.Info,
          },
          modal: {
            height: MODAL_HEIGHT.SMALL,
            Component: ResetPasswordModal,
          },
        };
      case ModalList.Terms:
        setTimeout(() => {
          dispatch(setParams({policy: Policy.Terms}));
        });
        return {
          button: {
            icon: Icon.Back,
            modal: ModalList.Info,
          },
          modal: {
            height: MODAL_HEIGHT.BIG,
            Component: PoliciesModal,
          },
        };
    }
    return {
      button: undefined,
      modal: undefined,
    };
  }, [currentModal]);

  return modal ? (
    <>
      <Modal {...modal} />
      <Button {...button} />
    </>
  ) : null;
}
