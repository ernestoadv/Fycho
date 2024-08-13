/**
 * @packageDocumentation
 * This module centrilizes and stores useful interfaces.
 */
import {Color} from './types';
import {ColorScheme as Scheme} from './enums';
import {TextPalette} from '../assets/palettes';

/***********/
/** Color **/
/***********/

/**
 * Defines a global achromatic colors palette.
 */
export interface Achromatic {
  black: Color;
  grey: Color;
  white: Color;
}

/**
 * Defines different opacities for a specific color.
 */
export interface Alpha {
  /**
   * @notExported
   * 20% Opacity
   */
  20: Color;
  /**
   * @notExported
   * 40% Opacity
   */
  40: Color;
  /**
   * @notExported
   * 60% Opacity
   */
  60: Color;
  /**
   * @notExported
   * 80% Opacity
   */
  80: Color;
  /**
   * @notExported
   * 100% Opacity
   */
  100: Color;
}

/**
 * Defines the main colors a palette must contain.
 * A palette consists on several colors based on the same color scheme.
 */
export interface Chromatic {
  primary: Color;
  secondary: Color;
  contrast: Color;
}

/**************/
/** Literals **/
/**************/

/**
 * Defines all literals to be translated.
 */
export interface Literals {
  /**
   * Contact modal literals.
   */
  contact: {
    email: string;
    phone: string;
  };
  /**
   * Information modal literals.
   */
  info: {
    /**
     * Contact button text.
     */
    contact: string;
    /**
     * Privacy policy button text.
     */
    privacy: string;
    /**
     * Reset password button text.
     */
    resetPassword: string;
    /**
     * Terms & conditions button text.
     */
    terms: string;
  };
  /**
   * Login modal literals.
   */
  login: {
    /**
     * Email placeholder.
     */
    email: string;
    /**
     * Login text.
     */
    login: string;
    /**
     * Password placeholder.
     */
    password: string;
  };
  /**
   * Terms & conditions and privacy policy modal literals.
   */
  policies: {
    /**
     * Privacy policy literals.
     */
    privacy: {
      /**
       * Privacy policy title.
       */
      title: string;
      /**
       * Paragraph number 1 of the privacy policy.
       */
      1: string;
    };
    /**
     * Terms & conditions literals.
     */
    terms: {
      /**
       * Terms & conditions title.
       */
      title: string;
      /**
       * Paragraph number 1 of the terms & conditions.
       */
      1: string;
      /**
       * Paragraph number 2 of the terms & conditions.
       */
      2: string;
      /**
       * Paragraph number 3 of the terms & conditions.
       */
      3: string;
    };
  };
  /**
   * Reset password modal literals.
   */
  resetPassword: {
    /**
     * Contact information. Email.
     */
    contact: string;
    /**
     * Modal informative text.
     */
    info: string;
    /**
     * Send button text.
     */
    send: string;
  };
}

/***********/
/** Theme **/
/***********/

/**
 * Defines the colors that different components will display for a specific theme.
 */
export interface Theme {
  /**
   * Background view colors.
   */
  background: {
    /**
     * Login page background.
     */
    login: Color;
    /**
     * Default page background.
     */
    main: Color;
  };
  /**
   * Button components available colors.
   */
  button: {
    /**
     * Default button background color.
     */
    default: Color;
    /**
     * Light button background color.
     */
    light: Color;
  };
  /**
   * Input view colors.
   */
  input: {
    /**
     * Default input background color.
     */
    default: Color;
  };
  /**
   * Modal view colours.
   */
  menu: {
    /**
     * Default menu background color.
     */
    background: Color;
    /**
     * Default menu border color.
     */
    border: Color;
    /**
     * Default icon colors.
     */
    icon: {
      /**
       * Active icon color
       */
      active: Color;
      /**
       * Inactive icon color
       */
      inactive: Color;
    };
  };
  /**
   * Modal view colours.
   */
  modal: {
    /**
     * Default modal background color.
     */
    default: Color;
    /**
     * Default modal text color.
     */
    text: Scheme;
  };
  text: typeof TextPalette;
}
