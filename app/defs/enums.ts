/**
 * @packageDocumentation
 * This module centrilizes and stores useful enums.
 */

/**
 * The different animations available.
 */
enum Animation {
  Fade = 'fade',
}

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
  About = 'about',
  Account = 'account',
  Appearence = 'appearence',
  Back = 'back',
  Calendar = 'calendar',
  Caret = 'caret',
  Clock = 'clock',
  Contact = 'contact',
  Email = 'email',
  Help = 'help',
  Home = 'home',
  Info = 'info',
  Language = 'language',
  Logout = 'logout',
  Notifications = 'notifications',
  Password = 'password',
  Phone = 'phone',
  Privacy = 'privacy',
  ResetPassword = 'resetPassword',
  Settings = 'settings',
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
 * Lists available politics.
 */
enum Policy {
  Privacy = 'privacy',
  Terms = 'terms',
}

export {Animation, ColorScheme, Icon, Modal, Policy};
