/**
 * @packageDocumentation
 * Policies modal.
 */
import Back from '../../molecules/buttons/navigation';
import Scroll from '../../molecules/scroll';
import fontStyles from '../../../style/fonts';
import useTheme from '../../../hooks/useTheme';
import useTranslation from '../../../hooks/useTranslation';
import {Policy} from '../../../types/enums';
import {StyleSheet, Text} from 'react-native';
import {modalSelector} from '../../../store/slices/modal';
import {useSelector} from 'react-redux';

/**
 *  Privacy policy and Terms & conditions modal. Displays a meaningful text inside a scrollable view.
 * @returns {React.JSX.Element} A React element that renders a policy modal.
 */
export default function Policies() {
  const {params} = useSelector(modalSelector);
  const literals = useTranslation();
  const theme = useTheme();
  const policy =
    params?.policy === Policy.Privacy ? Policy.Privacy : Policy.Terms;
  const text = {color: theme.text[theme.modal.text][100]};
  return (
    <>
      <Text style={[style.title, fontStyles.bold, text]}>
        {literals.policies[policy].title}
      </Text>
      <Scroll style={[style.content]}>
        {Object.entries(literals.policies[policy]).map((item, index) => {
          if (item[0] === 'title') return null;
          return (
            <Text key={index} style={text}>
              <Text style={fontStyles.bold}>
                {item[0]}
                {'. '}
              </Text>
              {item[1]}
            </Text>
          );
        })}
      </Scroll>
      <Back style={{opacity: 0}} />
    </>
  );
}

const style = StyleSheet.create({
  content: {
    fontSize: 16,
    marginHorizontal: 30,
    paddingHorizontal: 10,
    marginBottom: 90,
  },
  title: {
    fontSize: 20,
    marginTop: 10,
  },
});
