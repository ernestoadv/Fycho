/**
 * @packageDocumentation
 * This module stores the available color palettes which
 * allow the creation of themes.
 */
import {Achromatic, Alpha, Chromatic} from '../types/interfaces';

/*************/
/** Objects **/
/*************/

/**
 * Achromatic palette containing neutral colors.
 * Remains the same for every theme.
 */
const AchromaticPalette: Achromatic = {
  black: '#000000',
  grey: '#AAAAAA',
  white: '#FFFFFF',
};

/**
 * Dark palette based on a blue color scheme.
 */
const DarkPalette: Chromatic = {
  primary: '#222222',
  secondary: '#3A3A3A',
  contrast: '#5F5F5F',
};

/**
 * Light palette based on a blue color scheme.
 */
const LightPalette: Chromatic = {
  primary: '#378CE7',
  secondary: '#67C6E3',
  contrast: '#5356FF',
};

/**
 * Text palette based on other palette schemes.
 * This palette includes different opacities for each color.
 */
const TextPalette = {
  black: {
    20: `${AchromaticPalette.black}33`,
    40: `${AchromaticPalette.black}66`,
    60: `${AchromaticPalette.black}99`,
    80: `${AchromaticPalette.black}CC`,
    100: `${AchromaticPalette.black}FF`,
  } as Alpha,
  dark: {
    20: `${DarkPalette.primary}33`,
    40: `${DarkPalette.primary}66`,
    60: `${DarkPalette.primary}99`,
    80: `${DarkPalette.primary}CC`,
    100: `${DarkPalette.primary}FF`,
  } as Alpha,
  light: {
    20: `${LightPalette.primary}33`,
    40: `${LightPalette.primary}66`,
    60: `${LightPalette.primary}99`,
    80: `${LightPalette.primary}CC`,
    100: `${LightPalette.primary}FF`,
  } as Alpha,
  white: {
    20: `${AchromaticPalette.white}33`,
    40: `${AchromaticPalette.white}66`,
    60: `${AchromaticPalette.white}99`,
    80: `${AchromaticPalette.white}FF`,
    100: `${AchromaticPalette.white}FF`,
  } as Alpha,
};

export {AchromaticPalette, DarkPalette, LightPalette, TextPalette};
