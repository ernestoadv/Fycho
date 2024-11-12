/**
 * @packageDocumentation
 * This module stores the available themes the application supports.
 */
import {ColorScheme as Scheme} from '../types/enums';
import {Theme} from '../types/interfaces';
import {
  AchromaticPalette,
  DarkPalette,
  LightPalette,
  TextPalette,
} from './palettes';

/*************/
/** Objects **/
/*************/

/**
 * Dark theme based on a blue color scheme.
 */
const Dark: Theme = {
  login: {
    button: {
      login: {
        border: AchromaticPalette.white,
        container: AchromaticPalette.white,
        text: AchromaticPalette.black,
      },
      resetPassword: {
        border: AchromaticPalette.white,
        container: AchromaticPalette.black,
        text: AchromaticPalette.white,
      },
    },
    input: {
      border: AchromaticPalette.white,
      container: AchromaticPalette.black,
      icon: AchromaticPalette.white,
      placeholder: AchromaticPalette.white,
      text: AchromaticPalette.white,
    },
    subtitle: AchromaticPalette.white,
    title: AchromaticPalette.white,
  },
  reset: {
    button: {
      border: AchromaticPalette.white,
      container: AchromaticPalette.white,
      text: AchromaticPalette.black,
    },
    input: {
      border: AchromaticPalette.white,
      container: AchromaticPalette.black,
      icon: AchromaticPalette.white,
      placeholder: AchromaticPalette.white,
      text: AchromaticPalette.white,
    },
    subtitle: AchromaticPalette.white,
    title: AchromaticPalette.white,
  },
  /**
   * REFACTOR ABOVE
   */
  background: {
    initial: AchromaticPalette.black,
    main: AchromaticPalette.black,
  },
  button: {
    contrast: LightPalette.contrast,
    default: DarkPalette.secondary,
    light: DarkPalette.contrast,
  },
  input: {
    default: DarkPalette.contrast,
  },
  menu: {
    background: AchromaticPalette.black,
    border: DarkPalette.primary,
    icon: {
      active: AchromaticPalette.white,
      inactive: DarkPalette.contrast,
    },
    title: AchromaticPalette.white,
  },
  modal: {
    default: DarkPalette.primary,
    text: Scheme.White,
  },
  text: TextPalette,
};

/**
 * Light theme based on a blue color scheme.
 */
const Light: Theme = {
  login: {
    button: {
      login: {
        border: AchromaticPalette.white,
        container: LightPalette.secondary,
        text: AchromaticPalette.white,
      },
      resetPassword: {
        border: LightPalette.secondary,
        container: LightPalette.secondary,
        text: AchromaticPalette.white,
      },
    },
    input: {
      border: AchromaticPalette.white,
      container: AchromaticPalette.white,
      icon: LightPalette.primary,
      placeholder: LightPalette.primary,
      text: LightPalette.primary,
    },
    subtitle: AchromaticPalette.white,
    title: AchromaticPalette.white,
  },
  reset: {
    button: {
      border: AchromaticPalette.white,
      container: LightPalette.secondary,
      text: AchromaticPalette.white,
    },
    input: {
      border: AchromaticPalette.white,
      container: AchromaticPalette.white,
      icon: LightPalette.primary,
      placeholder: LightPalette.primary,
      text: LightPalette.primary,
    },
    subtitle: AchromaticPalette.white,
    title: AchromaticPalette.white,
  },
  /**
   * REFACTOR ABOVE
   */
  background: {
    initial: LightPalette.primary,
    main: AchromaticPalette.white,
  },
  button: {
    contrast: LightPalette.contrast,
    default: LightPalette.primary,
    light: LightPalette.secondary,
  },
  input: {
    default: LightPalette.secondary,
  },
  menu: {
    background: AchromaticPalette.white,
    border: AchromaticPalette.grey,
    icon: {
      active: AchromaticPalette.black,
      inactive: AchromaticPalette.grey,
    },
    title: AchromaticPalette.black,
  },
  modal: {
    default: AchromaticPalette.white,
    text: Scheme.Black,
  },
  text: TextPalette,
};

export {Dark, Light};
