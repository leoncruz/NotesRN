import React, { useCallback, useState } from 'react';

import { useRoute } from '@react-navigation/native';
import { Box, TextArea } from 'native-base';

import { StackNavigatorProps } from '../../routes';

import type { RouteProp } from '@react-navigation/native';

type NoteScreenProps = RouteProp<StackNavigatorProps, 'Note'>;

const Note: React.FC = () => {
  const route = useRoute<NoteScreenProps>();
  const note = route.params.note;

  const [noteBody, setNoteBody] = useState<string>(note.body);
  const [textAreaHeight, setTextAreaHeight] = useState<number | null>(null);

  const handleChangeText = useCallback((newValue: string) => {
    setNoteBody(newValue);
  }, []);

  return (
    <Box m={5} shadow={4} bg="white" p={5} borderRadius={10}>
      <TextArea
        h={textAreaHeight}
        onContentSizeChange={event => {
          const newHeight = event.nativeEvent.contentSize.height;
          setTextAreaHeight(newHeight);
        }}
        borderWidth={0}
        onChangeText={handleChangeText}
        value={noteBody}
        fontSize={16}
        autoCompleteType
        _focus={{
          backgroundColor: 'white'
        }}
      />
    </Box>
  );
};

export { Note };
