/**
 * @packageDocumentation
 * This module centrilizes and stores useful types.
 */

/***********/
/** Color **/
/***********/

/**
 * Defines a HEX color model. Ex: '#1234AA'
 */
export type HEX = `#${string}`;
/**
 * Defines an RGBA color model. Ex: 'rgba(100,100,200)'
 */
export type RGB = `rgb(${number}, ${number}, ${number})`;
/**
 * Defines an RGBA color model. Ex: 'rgba(100,100,200,0.5)'
 */
export type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;

/**
 * Defines a color. Can be based on an RGB, RGBA or HEX model.
 */
export type Color = RGB | RGBA | HEX;
