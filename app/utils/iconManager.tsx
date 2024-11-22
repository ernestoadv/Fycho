/**
 * @packageDocumentation
 * This module selects and renders an specific SVG icon based on the component props.
 */
import {
  About,
  Account,
  Appearence,
  Back,
  Calendar,
  Caret,
  Clock,
  Contact,
  Email,
  Help,
  Home,
  Info,
  Language,
  Logout,
  Notifications,
  Password,
  Phone,
  Privacy,
  ResetPassword,
  Settings,
  Terms,
} from '@assets/media/svgs';
import {Color} from '@defs/types';
import {Icon} from '@defs/enums';
import {useMemo} from 'react';

/**
 * @notExported
 * This interface defines the properties the IconManager can receive.
 */
interface Props {
  /**
   * The icon's identifier.
   */
  id?: Icon;
  /**
   * The color to paint the icon with.
   */
  color?: Color;
  /**
   * Whether the icon should be filled or not
   */
  fill?: boolean;
  /**
   * The icon's height.
   */
  height?: number;
  /**
   * The icon's width.
   */
  width?: number;
}

/**
 * This component renders an SVG icon.
 * @param {Props} props Icon properties.
 * @returns {React.JSX.Element} A React element that renders an icon.
 */
export default function IconManager({id, color, fill, height, width}: Props) {
  let Component = useMemo(() => {
    switch (id) {
      case Icon.About:
        return About;
      case Icon.Account:
        return Account;
      case Icon.Appearence:
        return Appearence;
      case Icon.Back:
        return Back;
      case Icon.Calendar:
        return Calendar;
      case Icon.Caret:
        return Caret;
      case Icon.Clock:
        return Clock;
      case Icon.Contact:
        return Contact;
      case Icon.Email:
        return Email;
      case Icon.Help:
        return Help;
      case Icon.Home:
        return Home;
      case Icon.Info:
        return Info;
      case Icon.Language:
        return Language;
      case Icon.Logout:
        return Logout;
      case Icon.Notifications:
        return Notifications;
      case Icon.Password:
        return Password;
      case Icon.Phone:
        return Phone;
      case Icon.Privacy:
        return Privacy;
      case Icon.ResetPassword:
        return ResetPassword;
      case Icon.Settings:
        return Settings;
      case Icon.Terms:
        return Terms;
    }
    return null;
  }, [id]);

  return Component ? (
    <Component color={color} fill={fill} height={height} width={width} />
  ) : null;
}
