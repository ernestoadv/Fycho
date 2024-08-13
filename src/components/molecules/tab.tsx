import {Color} from '../../types/types';
import {Pressable, StyleSheet, Text} from 'react-native';
import useTheme from '../../hooks/useTheme';
import usePress from '../../hooks/usePress';

const MIN_OPACITY = 0.6;

interface Props {
  background?: {focused?: Color; unfocused?: Color};
  color?: {focused?: Color; unfocused?: Color};
  focused?: boolean;
  text: string;
  callback?: () => void;
}

export default function Tab({
  background,
  color,
  focused = false,
  text,
  callback,
}: Props) {
  const theme = useTheme();
  const [opacity, handlers] = usePress({
    callback,
    minOpacity: MIN_OPACITY,
  });
  return (
    <Pressable
      {...handlers}
      style={[
        style.container,
        {
          backgroundColor:
            focused || opacity === MIN_OPACITY
              ? background?.focused || theme.button.default
              : background?.unfocused,
          opacity,
        },
      ]}>
      <Text
        style={[
          style.text,
          {
            color:
              focused || opacity !== 1
                ? color?.focused || theme.text.white[100]
                : color?.unfocused || theme.text[theme.modal.text][100],
          },
        ]}>
        {text}
      </Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  container: {
    borderRadius: 50,
    padding: 8,
  },
  text: {
    fontSize: 12,
  },
});
