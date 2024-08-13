/**
 * @packageDocumentation
 * This module stores static SVGs as components.
 */
import {Color} from '../types/types';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';
import commonStyles from '../style/common';

/****************/
/** Interfaces **/
/****************/

/**
 * @notExported
 * Defines the properties of an SVG.
 */
interface Props {
  /**
   * The color the SVG will be filled with.
   */
  color?: Color;
  height?: number;
  width?: number;
}

/****************/
/** Components **/
/****************/

/**
 * Back icon.
 */
function Back({color, height, width}: Props) {
  return (
    <Svg
      width={width || 26}
      height={height || 16}
      fill="none"
      testID={'backIcon'}>
      <Path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M23.04 8h-20M7.2 3 2 8l5.2 5"
      />
    </Svg>
  );
}

/**
 * Contact icon.
 */
function Contact({color, height, width}: Props) {
  return (
    <Svg
      width={width || 18}
      height={height || 18}
      viewBox="0 0 14 14"
      fill="none"
      style={[commonStyles.shadow]}
      testID={'contactIcon'}>
      <Path
        d="M12.422 13.424h-9.33a1.473 1.473 0 110-2.947h8.348a.982.982 0 00.982-.982V1.638a.982.982 0 00-.982-.982H3.092A1.473 1.473 0 001.62 2.09v9.821M11.44 10.477v2.947"
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.524 8.236a1.702 1.702 0 001.957-.461l.246-.247a.533.533 0 00.096-.732l-.796-.795a.533.533 0 00-.732.095.533.533 0 01-.731.095L6.29 4.92a.533.533 0 01.095-.732.533.533 0 00.096-.732l-.796-.796a.533.533 0 00-.732.096L4.708 3a1.71 1.71 0 00-.462 1.957 9.546 9.546 0 003.278 3.278z"
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/**
 * Email icon.
 */
function Email({color, height, width}: Props) {
  return (
    <Svg
      width={width || 16}
      height={height || 14}
      viewBox="0 0 14 12"
      fill="none"
      style={[commonStyles.shadow]}
      testID={'emailIcon'}>
      <Path
        stroke={color || '#fff'}
        d="M12.5.75h-11a1 1 0 0 0-1 1v8.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-8.5a1 1 0 0 0-1-1z"
      />
      <Path
        stroke={color || '#fff'}
        d="m.5 2 5.86 3.524c.18.106.406.163.64.163.234 0 .46-.057.64-.163L13.5 2"
      />
    </Svg>
  );
}

/**
 * Home icon.
 */
function Home({color, height, width}: Props) {
  return (
    <Svg
      width={width || 23}
      height={height || 24}
      viewBox="0 0 29 30"
      fill="none"
      testID={'homeIcon'}>
      <Path
        d="M27.5 14.88C27.502 14.6024 27.446 14.3274 27.3358 14.0726C27.2256 13.8178 27.0636 13.5888 26.86 13.4L14.5 2L2.14005 13.4C1.9365 13.5888 1.77447 13.8178 1.66429 14.0726C1.5541 14.3274 1.49817 14.6024 1.50005 14.88V26C1.50005 26.5304 1.71076 27.0392 2.08583 27.4142C2.4609 27.7892 2.96962 28 3.50004 28H25.5C26.0304 28 26.5392 27.7892 26.9142 27.4142C27.2894 27.0392 27.5 26.5304 27.5 26V14.88Z"
        stroke={color || '#fff'}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 28V20"
        stroke={color || '#fff'}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

/**
 * Info icon.
 */
function Info({color, height, width}: Props) {
  return (
    <Svg
      width={width || 30}
      height={height || 30}
      viewBox="0 0 14 14"
      fill="none"
      testID={'infoIcon'}>
      <G
        clipPath="url(#clip0_1222_42893)"
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round">
        <Path d="M7 13.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM5.5 10h3" />
        <Path d="M7 10V6.5H6M7 4.25a.25.25 0 010-.5M7 4.25a.25.25 0 000-.5" />
      </G>
      <Defs>
        <ClipPath id="clip0_1222_42893">
          <Path fill={color || '#fff'} d="M0 0H14V14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

/**
 * Password icon.
 */
function Password({color, height, width}: Props) {
  return (
    <Svg
      width={width || 16}
      height={height || 14}
      viewBox="0 0 14 12"
      fill="none"
      style={[commonStyles.shadow]}
      testID={'passwordIcon'}>
      <Path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.62 6.38 11.5.5l2 2M9.25 2.75 11 4.5"
      />
      <Path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.5 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      />
    </Svg>
  );
}

/**
 * Phone icon.
 */
function Phone({color, height, width}: Props) {
  return (
    <Svg
      width={width || 16}
      height={height || 16}
      viewBox="0 0 14 14"
      fill="none"
      style={[commonStyles.shadow]}
      testID={'phoneIcon'}>
      <Path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.24782 12.9817C4.63328 13.3781 3.90097 13.5509 3.17402 13.471C2.44708 13.391 1.76983 13.0632 1.25617 12.5426L0.807105 12.1035C0.610232 11.9021 0.5 11.6317 0.5 11.3501C0.5 11.0685 0.610232 10.798 0.807105 10.5967L2.71312 8.71061C2.91281 8.51437 3.18158 8.40441 3.46156 8.40441C3.74153 8.40441 4.01031 8.51437 4.20999 8.71061C4.41136 8.90749 4.6818 9.01772 4.96342 9.01772C5.24504 9.01772 5.51547 8.90749 5.71684 8.71061L8.71058 5.71687C8.81045 5.61845 8.88976 5.50116 8.94389 5.37182C8.99802 5.24248 9.0259 5.10366 9.0259 4.96345C9.0259 4.82323 8.99802 4.68442 8.94389 4.55507C8.88976 4.42573 8.81045 4.30844 8.71058 4.21002C8.51434 4.01034 8.40438 3.74156 8.40438 3.46159C8.40438 3.18161 8.51434 2.91284 8.71058 2.71315L10.6066 0.817115C10.808 0.620241 11.0784 0.51001 11.36 0.51001C11.6417 0.51001 11.9121 0.620241 12.1135 0.817115L12.5526 1.26618C13.0731 1.77984 13.4009 2.45709 13.4809 3.18403C13.5609 3.91098 13.3881 4.64329 12.9916 5.25783C10.9259 8.3022 8.29751 10.9238 5.24782 12.9817Z"
      />
    </Svg>
  );
}

/**
 * Privacy icon.
 */
function Privacy({color, height, width}: Props) {
  return (
    <Svg
      width={width || 18}
      height={height || 18}
      viewBox="0 0 14 14"
      fill="none"
      style={[commonStyles.shadow]}
      testID={'privacyIcon'}>
      <Path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.74899 13.4919C4.99163 13.4919 5.99899 12.4846 5.99899 11.2419C5.99899 9.9993 4.99163 8.99194 3.74899 8.99194C2.50635 8.99194 1.49899 9.9993 1.49899 11.2419C1.49899 12.4846 2.50635 13.4919 3.74899 13.4919Z"
      />
      <Path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.251 13.4919C11.4936 13.4919 12.501 12.4846 12.501 11.2419C12.501 9.9993 11.4936 8.99194 10.251 8.99194C9.00837 8.99194 8.00101 9.9993 8.00101 11.2419C8.00101 12.4846 9.00837 13.4919 10.251 13.4919Z"
      />
      <Path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5.99805 11.2418C5.99805 11.2418 5.99805 10.2412 6.99856 10.2412C7.99908 10.2412 7.99908 11.2418 7.99908 11.2418"
      />
      <Path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M0.5 6.5H13.5"
      />
      <Path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.86084 1.33558C2.94121 0.853403 3.3584 0.5 3.84723 0.5H10.1529C10.6417 0.5 11.0589 0.853424 11.1393 1.33562L11.9999 6.5H2L2.86084 1.33558Z"
      />
    </Svg>
  );
}

function ResetPassword({color, height, width}: Props) {
  return (
    <Svg
      width={width || 18}
      height={height || 18}
      viewBox="0 0 14 14"
      fill="none"
      style={[commonStyles.shadow]}
      testID={'resetPasswordIcon'}>
      <G clipPath="url(#clip0_1222_37442)" stroke={color || '#fff'}>
        <Path d="M13.326 8.5a6.5 6.5 0 11-.558-4.5" strokeLinecap="round" />
        <Path d="M13.5 2v2.5H11" strokeLinecap="round" strokeLinejoin="round" />
        <Path
          d="M4.75 9.25v-2a.5.5 0 01.5-.5h3.5a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-3.5a.5.5 0 01-.5-.5z"
          strokeLinejoin="round"
        />
        <Path
          d="M5.5 6.75v-1a1.5 1.5 0 113 0v1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1222_37442">
          <Path fill={color || '#fff'} d="M0 0H14V14H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

/**
 * Terms icon.
 */
function Terms({color, height, width}: Props) {
  return (
    <Svg
      width={width || 18}
      height={height || 18}
      viewBox="0 0 14 14"
      fill="none"
      style={[commonStyles.shadow]}
      testID={'termsIcon'}>
      <Path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 3.5V11.5C10 12.0304 9.78929 12.5391 9.41421 12.9142C9.03914 13.2893 8.53043 13.5 8 13.5H0.5C1.03043 13.5 1.53914 13.2893 1.91421 12.9142C2.28929 12.5391 2.5 12.0304 2.5 11.5V2.5C2.5 1.96957 2.71071 1.46086 3.08579 1.08579C3.46086 0.710714 3.96957 0.5 4.5 0.5H11.75"
      />
      <Path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.75 0.5C12.2141 0.5 12.6592 0.684374 12.9874 1.01256C13.3156 1.34075 13.5 1.78587 13.5 2.25V3C13.5 3.13261 13.4473 3.25979 13.3536 3.35355C13.2598 3.44732 13.1326 3.5 13 3.5H10V2.25C10 1.78587 10.1844 1.34075 10.5126 1.01256C10.8408 0.684374 11.2859 0.5 11.75 0.5Z"
      />
      <Path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 4H7.5"
      />
      <Path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 7H7.5"
      />
      <Path
        stroke={color || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 10H7.5"
      />
    </Svg>
  );
}

export {
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
};
