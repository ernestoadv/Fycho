/**
 * @packageDocumentation
 * This module stores the available languages along the translation of
 * all static literals used throughout the application.
 */
import {Literals} from '@defs/interfaces';
import {privacy, terms} from './policies';

/*************/
/** Objects **/
/*************/

/**
 * This object stores information about several languages and their locales,
 * being the latter defined here:
 * https://docs.oracle.com/cd/E23824_01/html/E26033/glset.html
 */
const languages = {
  English: 'en',
  French: 'fr',
  Portuguese: 'pt',
  Spanish: 'es',
};

/**
 * Static literals.
 */
const literals: {
  [key: string]: Literals;
} = {
  /**
   * English literals.
   */
  en: {
    calendar: {
      title: 'Calendar',
    },
    contact: {
      email: 'info@cuydo.com',
      phone: '+34 644 690 480',
    },
    home: {
      title: 'Home',
    },
    info: {
      contact: 'Contact information',
      privacy: 'Privacy policy',
      resetPassword: 'Reset your password',
      terms: 'Terms and conditions',
    },
    login: {
      button: 'Log in',
      email: 'Email',
      password: 'Password',
      subtitle: 'Sign in to continue',
      resetPassword: 'Forgot password?',
      title: 'Fycho',
    },
    policies: {
      privacy: privacy.en,
      terms: terms.en,
    },
    reset: {
      button: 'Send',
      email: 'Email',
      subtitle: 'Introduce your email to receive a recovery code.',
      title: 'Reset password',
    },
    settings: {
      items: {
        about: 'About',
        account: 'Account',
        appearence: 'Appearence',
        help: 'Help and support',
        language: 'Language',
        logout: 'Log out',
        notifications: 'Notifications',
        privacy: 'Privacy and security',
      },
      title: 'Settings',
    },
  },

  /**
   * Spanish literals.
   */
  es: {
    calendar: {
      title: 'Calendario',
    },
    contact: {
      email: 'info@cuydo.com',
      phone: '+34 644 690 480',
    },
    home: {
      title: 'Inicio',
    },
    info: {
      contact: 'Información de contacto',
      privacy: 'Política de privacidad',
      resetPassword: 'Recuperar contraseña',
      terms: 'Términos y condiciones',
    },
    login: {
      button: 'Acceder',
      email: 'Correo electrónico',
      password: 'Contraseña',
      resetPassword: '¿Has olvidado tu contraseña?',
      subtitle: 'Identíficate para continuar',
      title: 'Fycho',
    },
    policies: {
      privacy: privacy.es,
      terms: terms.es,
    },
    reset: {
      button: 'Enviar',
      email: 'Correo electrónico',
      subtitle:
        'Introduce tu correo electrónico para recibir un código de recuperación.',
      title: 'Reestablecer contraseña',
    },
    settings: {
      items: {
        about: 'Acerca de',
        account: 'Cuenta',
        appearence: 'Apariencia',
        help: 'Ayuda y soporte',
        language: 'Idioma',
        logout: 'Cerrar sesión',
        notifications: 'Notificaciones',
        privacy: 'Privacidad y seguridad',
      },
      title: 'Ajustes',
    },
  },
};

export {languages, literals};
