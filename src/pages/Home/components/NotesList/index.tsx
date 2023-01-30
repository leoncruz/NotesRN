import React, { useState } from 'react';

import { FlatList } from 'native-base';

import { Note as NoteModel } from '../../../../models/Note';
import { Note } from '../Note';

type NotesListProps = {
  notes: Array<NoteModel>;
};

const NotesList: React.FC<NotesListProps> = ({ notes: listNotes }) => {
  const [notes, setNotes] = useState(listNotes);

  const removeNote = (note: NoteModel) => {
    const newList = notes.filter(item => item.id !== note.id);

    setNotes(newList);
  };

  return (
    <FlatList
      data={notes}
      renderItem={({ item }) => {
        return <Note note={item} removeNote={removeNote} />;
      }}
      keyExtractor={(item, index) => `${item.id}-${index}`}
    />
  );
};

export { NotesList };
