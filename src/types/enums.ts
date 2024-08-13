/**
 * @packageDocumentation
 * This module centrilizes and stores useful enums.
 */

/**
 * The different color schemes that themes or texts are based on.
 */
enum ColorScheme {
  Black = 'black',
  Dark = 'dark',
  Light = 'light',
  White = 'white',
}

/**
 * Lists all available static icons.
 * The icon manager uses this enum in order to pick the right component for each of these items.
 */
enum Icon {
  Back = 'back',
  Contact = 'contact',
  Email = 'email',
  Home = 'home',
  Info = 'info',
  Password = 'password',
  Phone = 'phone',
  Privacy = 'privacy',
  ResetPassword = 'resetPassword',
  Terms = 'terms',
}

/**
 * Lists all available modals.
 * The modal manager uses this enum in order to pick the right component for each of these items.
 */
enum Modal {
  Contact = 'contact',
  Info = 'info',
  Login = 'login',
  Politics = 'politics',
  Privacy = 'privacy',
  ResetPassword = 'reset_password',
  Terms = 'terms',
}

/**
 * Lists all available pages.
 * The page manager uses this enum in order to pick the right component for each of these items.
 */
enum Page {
  Initial = 'initial',
}

/**
 * Lists available politics.
 */
enum Policy {
  Privacy = 'privacy',
  Terms = 'terms',
}

export {ColorScheme, Icon, Modal, Page, Policy};
