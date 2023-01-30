import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Box, Column, Pressable, Text } from 'native-base';
import { useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming
} from 'react-native-reanimated';

import { Note as NoteModel } from '../../../../models/Note';

type NoteProps = {
  note: NoteModel;
  removeNote: (note: NoteModel) => void;
};

const Note: React.FC<NoteProps> = ({ note, removeNote }) => {
  const navigation = useNavigation();
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  const SWIPE_LIMIT = SCREEN_WIDTH / 2;
  const position = useSharedValue(0);
  const itemHeight = useSharedValue(120);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: position.value }],
      height: itemHeight.value
    };
  });

  const swipeGesture = Gesture.Pan()
    .onUpdate(e => {
      position.value = e.translationX;
    })
    .onEnd(e => {
      if (e.translationX > SWIPE_LIMIT) {
        position.value = withSpring(SCREEN_WIDTH * 2);
        itemHeight.value = withTiming(0);
        runOnJS(removeNote)(note);
      } else if (e.translationX < -SWIPE_LIMIT) {
        position.value = withSpring(-SCREEN_WIDTH * 2);
        itemHeight.value = withTiming(0);
        runOnJS(removeNote)(note);
      } else {
        position.value = withSpring(0);
      }
    })
    .activeOffsetX([-1, 1])
    .failOffsetY([-1, 1]);

  const showNote = () => {
    navigation.navigate('Note' as never, { note, name: note.title } as never);
  };

  return (
    <GestureDetector gesture={swipeGesture}>
      <Animated.View style={style}>
        <Pressable onPress={showNote}>
          <Box bg="white" margin={3} borderRadius={10} padding={5} shadow={4}>
            <Column>
              <Text>{note.title}</Text>
              <Text paddingTop={5} maxH={50} fontSize={16} numberOfLines={1}>
                {note.body}
              </Text>
            </Column>
          </Box>
        </Pressable>
      </Animated.View>
    </GestureDetector>
  );
};

export { Note };
