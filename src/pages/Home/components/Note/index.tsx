import React from 'react';
import { Box, Column, Text } from 'native-base';

import { Note as NoteModel } from '../../../../models/Note';

type NoteProps = {
  note: NoteModel;
};

const Note: React.FC<NoteProps> = ({ note }) => {
  return (
    <Box bg="white" h={100} margin={3} borderRadius={10} padding={5} shadow={4}>
      <Column>
        <Text>{note.title}</Text>
        <Text paddingTop={5} maxH={50} fontSize={16} numberOfLines={1}>
          {note.body}
        </Text>
      </Column>
    </Box>
  );
};

export { Note };
