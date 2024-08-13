/**
 * @packageDocumentation
 * This module stores the available languages along the translation of
 * all static literals used throughout the application.
 */
import {Literals} from '../types/interfaces';
import {privacy, terms} from './policies';

/*************/
/** Objects **/
/*************/

/**
 * This object stores information about several languages and their locales,
 * being the latter defined here:
 * https://docs.oracle.com/cd/E23824_01/html/E26033/glset.html
 */
const Locales = {
  English: [
    'en',
    'en_AU',
    'en_BW',
    'en_GB',
    'en_HK',
    'en_IE',
    'en_IN',
    'en_MT',
    'en_NZ',
    'en_PH',
    'en_SG',
    'en_US',
    'en_ZW',
  ],
  French: ['fr', 'fr_BE', 'fr_CA', 'fr_CH', 'fr_FR', 'fr_LU'],
  Portuguese: ['pt', 'pt_BR', 'pt_PT'],
  Spanish: [
    'es',
    'es_AR',
    'es_BO',
    'es_CL',
    'es_CO',
    'es_CR',
    'es_DO',
    'es_EC',
    'es_ES',
    'es_GT',
    'es_HN',
    'es_MX',
    'es_NI',
    'es_PA',
    'es_PE',
    'es_PR',
    'es_PY',
    'es_SV',
    'es_US',
    'es_UY',
    'es_VE',
  ],
};

/**
 * Static literals in english.
 */
const English: Literals = {
  contact: {
    email: 'info@cuydo.com',
    phone: '+34 644 690 480',
  },
  info: {
    contact: 'Contact information',
    privacy: 'Privacy policy',
    resetPassword: 'Reset your password',
    terms: 'Terms and conditions',
  },
  login: {
    email: 'Email',
    login: 'Login',
    password: 'Password',
  },
  policies: {
    privacy: privacy.en,
    terms: terms.en,
  },
  resetPassword: {
    contact: 'info@cuydo.com',
    info: 'Introduce tu correo electrónico para recibir un código de recuperación. Si el problema persiste, contacta con ',
    send: 'Enviar',
  },
};

/**
 * Static literals in spanish.
 */
const Spanish: Literals = {
  contact: {
    email: 'info@cuydo.com',
    phone: '+34 644 690 480',
  },
  info: {
    contact: 'Información de contacto',
    privacy: 'Política de privacidad',
    resetPassword: 'Recuperar contraseña',
    terms: 'Términos y condiciones',
  },
  login: {
    email: 'Correo electrónico',
    login: 'Iniciar sesión',
    password: 'Contraseña',
  },
  policies: {
    privacy: privacy.es,
    terms: terms.es,
  },
  resetPassword: {
    contact: 'info@cuydo.com',
    info: 'Introduce tu correo electrónico para recibir un código de recuperación. Si el problema persiste, contacta con ',
    send: 'Enviar',
  },
};

export {Locales, English, Spanish};
