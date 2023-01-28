import React from 'react';
import { FlatList } from 'native-base';
import { Note as NoteModel } from '../../../../models/Note';
import { Note } from '../Note';

type NotesListProps = {
  notes: Array<NoteModel>;
};

const NotesList: React.FC<NotesListProps> = ({ notes }) => {
  return (
    <FlatList
      data={notes}
      renderItem={({ item }) => {
        return <Note note={item} />;
      }}
      keyExtractor={(item, index) => `${item.id}-${index}`}
    />
  );
};

export { NotesList };
