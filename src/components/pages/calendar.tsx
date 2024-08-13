/**
 * @packageDocumentation
 * Cal page.
 */
import Template from '../templates/main';

/**
  This component displays different modals that allow the user to log in, recover a forgotten password, look up for contact information, etc. The first modal to render is the login modal.
 * @returns {React.JSX.Element} A React element that renders the Calendar Page.
 */
export default function Calendar() {
  return <Template name="Calendar" />;
}
