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
 * Defines a global achromatic colors palette.
 */
export interface Achromatic {
  black: Color;
  grey: Color;
  white: Color;
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
   * Calendar literals.
   */
  calendar: {
    /**
     * Calendar page title.
     */
    title: string;
  };
  /**
   * Contact modal literals.
   */
  contact: {
    email: string;
    phone: string;
  };
  /**
   * Home literals.
   */
  home: {
    /**
     * Home page title.
     */
    title: string;
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
   * Login page literals.
   */
  login: {
    /**
     * Login text.
     */
    button: string;
    /**
     * Email placeholder.
     */
    email: string;
    /**
     * Password placeholder.
     */
    password: string;
    /**
     * Subtitle text.
     */
    subtitle: string;
    /**
     * Reset password button text.
     */
    resetPassword: string;
    /**
     * Title text.
     */
    title: string;
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
   * Profile literals.
   */
  profile: {
    /**
     * Profile page title.
     */
    title: string;
  };
  /**
   * Reset password modal literals.
   */
  reset: {
    /**
     * Modal informative text.
     */
    info: string;
    /**
     * Login text.
     */
    button: string;
    /**
     * Email placeholder.
     */
    email: string;
    /**
     * Subtitle text.
     */
    subtitle: string;
    /**
     * Title text.
     */
    title: string;
  };
}

/***********/
/** Theme **/
/***********/

/**
 * Defines the colors that different components will display for a specific theme.
 */
export interface Theme {
  login: {
    button: {
      login: {
        border: Color;
        container: Color;
        text: Color;
      };
      resetPassword: {
        border: Color;
        container: Color;
        text: Color;
      };
    };
    input: {
      border: Color;
      container: Color;
      icon: Color;
      placeholder: Color;
      text: Color;
    };
    subtitle: Color;
    title: Color;
  };
  reset: {
    button: {
      border: Color;
      container: Color;
      text: Color;
    };
    input: {
      border: Color;
      container: Color;
      icon: Color;
      placeholder: Color;
      text: Color;
    };
    subtitle: Color;
    title: Color;
  };
  /**
   * REFACTOR ABOVE
   */
  /**
   * Background view colors.
   */
  background: {
    /**
     * Initial template background.
     */
    initial: Color;
    /**
     * Main template background.
     */
    main: Color;
  };
  /**
   * Button components available colors.
   */
  button: {
    /**
     * Contrast button background color.
     */
    contrast: Color;
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
    /**
     * Menu title color
     */
    title: Color;
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
