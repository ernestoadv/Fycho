/**
 * @packageDocumentation
 * This module centrilizes and stores useful interfaces.
 */
import {Color} from './types';
import {Orientation} from 'expo-screen-orientation';

/***********/
/** Color **/
/***********/

/**
 * Defines a global achromatic colors palette.
 */
export interface Achromatic {
  black: Color;
  grey: {light: Color; medium: Color; dark: Color};
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
   * Reset password modal literals.
   */
  reset: {
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
  /**
   * Settings literals.
   */
  settings: {
    /**
     * Setting button texts.
     */
    items: {
      /**
       * About setting text.
       */
      about: string;
      /**
       * Account setting text.
       */
      account: string;
      /**
       * Appearence setting text.
       */
      appearence: string;
      /**
       * Help and support setting text.
       */
      help: string;
      /**
       * Language setting text.
       */
      language: string;
      /**
       * Log out setting text.
       */
      logout: string;
      /**
       * Notifications setting text.
       */
      notifications: string;
      /**
       * Privacy and security setting text.
       */
      privacy: string;
    };
    /**
     * Settings page title.
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
  /**
   * Background colors.
   */
  background: {
    /**
     * Access template background.
     */
    access: Color;
    /**
     * Main template background.
     */
    main: Color;
  };
  /**
   * Login page colors.
   */
  login: {
    /**
     * Login buttons' colors.
     */
    button: {
      /**
       * Login button colors.
       */
      login: {
        /**
         * Container color.
         */
        container: Color;
        /**
         * Text color.
         */
        text: Color;
      };
      /**
       * Login password reset button colrs.
       */
      reset: {
        /**
         * Container color.
         */
        container: Color;
        /**
         * Text color.
         */
        text: Color;
      };
    };
    /**
     * Login input colors.
     */
    input: {
      /**
       * Login input border color.
       */
      border: Color;
      /**
       * Login input container color.
       */
      container: Color;
      /**
       * Login input icon color.
       */
      icon: Color;
      /**
       * Login input placeholder color.
       */
      placeholder: Color;
      /**
       * Login input text color.
       */
      text: Color;
    };
    /**
     * Login subtitle color.
     */
    subtitle: Color;
    /**
     * Login title color.
     */
    title: Color;
  };
  /**
   * Reset password page colors.
   */
  reset: {
    /**
     * Reset password button colors.
     */
    button: {
      /**
       * Reset password button container color.
       */
      container: Color;
      /**
       * Reset password button text color.
       */
      text: Color;
    };
    /**
     * Reset password input colors.
     */
    input: {
      /**
       * Reset password input border color.
       */
      border: Color;
      /**
       * Reset password input container color.
       */
      container: Color;
      /**
       * Reset password input icon color.
       */
      icon: Color;
      /**
       * Reset password input placeholder color.
       */
      placeholder: Color;
      /**
       * Reset password input text color.
       */
      text: Color;
    };
    /**
     * Reset passsword subtitle color.
     */
    subtitle: Color;
    /**
     * Reset passsword title color.
     */
    title: Color;
  };
  /**
   * Settings page colors.
   */
  settings: {
    /**
     * Setting buttons' colors.
     */
    item: {
      /**
       * Default setting button color.
       */
      default: Color;
      /**
       * Logout setting button color.
       */
      logout: Color;
    };
    /**
     * Settings section background color.
     */
    section: Color;
    /**
     * Settings separator color.
     */
    separator: Color;
    /**
     * Settings title color.
     */
    title: Color;
  };
  /**
   * Tabs colors.
   */
  tabs: {
    /**
     * Tabs background color.
     */
    background: Color;
    /**
     * Tabs icon colors.
     */
    icon: {
      /**
       * Tabs active icon color
       */
      active: Color;
      /**
       * Tabs inactive icon color
       */
      inactive: Color;
    };
  };
}

/************/
/** Window **/
/************/

/**
 * Window properties
 * @typedef {Object} Window
 * @property {boolean} height Window's current height.
 * @property {boolean} landscape Whether the window's orientation is horizontal or not.
 * @property {Orientation} orientation Current window's orientation, including direction (e.g., "portrait", "landscape", "portrait upside down", "landscape upside down").
 * @property {boolean} portrait Whether the window's orientation is vertical or not.
 * @property {Object} width Window's current width.
 */
export interface Window {
  height: number;
  landscape: boolean;
  orientation: Orientation;
  portrait: boolean;
  ratio: {
    heightWidth: number;
    widthHeight: number;
  };
  width: number;
}
