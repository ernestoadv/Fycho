/**
 * @packageDocumentation
 * This module selects and renders an specific SVG icon based on the component props.
 */
import {
  Back,
  Contact,
  Email,
  Home,
  Info,
  Password,
  Phone,
  Privacy,
  ResetPassword,
  Terms,
} from '../assets/svgs';
import {Color} from '../types/types';
import {Icon} from '../types/enums';
import {useMemo} from 'react';

/**
 * @notExported
 * This interface defines the properties the IconManager can receive.
 */
interface Props {
  /**
   * The color to fill the icon with.
   */
  color?: Color;
  /**
   * The icon's height.
   */
  height?: number;
  /**
   * The icon's identifier.
   */
  icon?: Icon;
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
export default function IconManager({color, height, icon, width}: Props) {
  let Component = useMemo(() => {
    switch (icon) {
      case Icon.Back:
        return Back;
      case Icon.Contact:
        return Contact;
      case Icon.Email:
        return Email;
      case Icon.Home:
        return Home;
      case Icon.Info:
        return Info;
      case Icon.Password:
        return Password;
      case Icon.Phone:
        return Phone;
      case Icon.Privacy:
        return Privacy;
      case Icon.ResetPassword:
        return ResetPassword;
      case Icon.Terms:
        return Terms;
    }
    return null;
  }, [icon]);

  return Component ? (
    <Component color={color} height={height} width={width} />
  ) : null;
}
