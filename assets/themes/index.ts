/**
 * @packageDocumentation
 * This module stores the available themes the application supports.
 */
import {Theme} from '@defs/interfaces';
import {AchromaticPalette, BluePalette, RedPalette} from './palettes';

/*************/
/** Objects **/
/*************/

/**
 * Dark theme.
 */
const Dark: Theme = {
  background: {
    access: AchromaticPalette.black,
    main: AchromaticPalette.black,
  },
  login: {
    button: {
      login: {
        container: AchromaticPalette.white,
        text: AchromaticPalette.black,
      },
      reset: {
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
  settings: {
    item: {
      default: AchromaticPalette.white,
      logout: RedPalette.primary,
    },
    section: AchromaticPalette.grey.light,
    separator: AchromaticPalette.white,
    title: AchromaticPalette.white,
  },
  tabs: {
    background: AchromaticPalette.black,
    icon: {
      active: AchromaticPalette.white,
      inactive: AchromaticPalette.white,
    },
  },
};

/**
 * Light theme.
 */
const Light: Theme = {
  background: {
    access: BluePalette.primary,
    main: AchromaticPalette.white,
  },
  login: {
    button: {
      login: {
        container: BluePalette.secondary,
        text: AchromaticPalette.white,
      },
      reset: {
        container: BluePalette.secondary,
        text: AchromaticPalette.white,
      },
    },
    input: {
      border: AchromaticPalette.white,
      container: AchromaticPalette.white,
      icon: BluePalette.primary,
      placeholder: BluePalette.primary,
      text: BluePalette.primary,
    },
    subtitle: AchromaticPalette.white,
    title: AchromaticPalette.white,
  },
  reset: {
    button: {
      container: BluePalette.secondary,
      text: AchromaticPalette.white,
    },
    input: {
      border: AchromaticPalette.white,
      container: AchromaticPalette.white,
      icon: BluePalette.primary,
      placeholder: BluePalette.primary,
      text: BluePalette.primary,
    },
    subtitle: AchromaticPalette.white,
    title: AchromaticPalette.white,
  },
  settings: {
    item: {
      default: AchromaticPalette.black,
      logout: RedPalette.primary,
    },
    section: AchromaticPalette.grey.light,
    separator: AchromaticPalette.black,
    title: AchromaticPalette.black,
  },
  tabs: {
    background: AchromaticPalette.white,
    icon: {
      active: AchromaticPalette.black,
      inactive: AchromaticPalette.black,
    },
  },
};

export {Dark, Light};
