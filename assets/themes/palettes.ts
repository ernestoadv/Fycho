/**
 * @packageDocumentation
 * This module stores the available color palettes which
 * allow the creation of themes.
 */
import {Achromatic, Chromatic} from '@defs/interfaces';

/*************/
/** Objects **/
/*************/

/**
 * Achromatic palette containing neutral colors.
 * Remains the same for every theme.
 */
const AchromaticPalette: Achromatic = {
  black: '#000000',
  grey: {light: '#999999', medium: '#777777', dark: '#555555'},
  white: '#FFFFFF',
};

/**
 * Blue palette.
 */
const BluePalette: Chromatic = {
  primary: '#378CE7',
  secondary: '#67C6E3',
  contrast: '#5356FF',
};

/**
 * Green palette.
 */
const GreenPalette: Chromatic = {
  primary: '#4CAF50',
  secondary: '#00E676',
  contrast: '#2E7D32',
};

/**
 * Red palette.
 */
const RedPalette: Chromatic = {
  primary: '#E53935',
  secondary: '#FF8A80',
  contrast: '#C62828',
};

export {AchromaticPalette, BluePalette, GreenPalette, RedPalette};
