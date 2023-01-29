import React from 'react';
import { Box, Column, Pressable, Text } from 'native-base';

import { Note as NoteModel } from '../../../../models/Note';
import { useNavigation } from '@react-navigation/native';

type NoteProps = {
  note: NoteModel;
};

const Note: React.FC<NoteProps> = ({ note }) => {
  const navigation = useNavigation();

  const showNote = () => {
    navigation.navigate('Note' as never, { note, name: note.title } as never);
  };

  return (
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
  );
};

export { Note };
