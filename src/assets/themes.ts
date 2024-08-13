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
  background: {
    login: AchromaticPalette.black,
    main: AchromaticPalette.black,
  },
  button: {
    default: DarkPalette.contrast,
    light: DarkPalette.secondary,
  },
  input: {
    default: DarkPalette.secondary,
  },
  menu: {
    background: DarkPalette.primary,
    border: DarkPalette.primary,
    icon: {
      active: AchromaticPalette.white,
      inactive: DarkPalette.contrast,
    },
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
  background: {
    login: LightPalette.primary,
    main: AchromaticPalette.white,
  },
  button: {
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
  },
  modal: {
    default: AchromaticPalette.white,
    text: Scheme.Black,
  },
  text: TextPalette,
};

export {Dark, Light};
