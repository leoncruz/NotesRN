import React from 'react';

import { NotesList } from './components/NotesList';
import { Note } from '../../models/Note';

const data = [...Array(10).keys()].map(
  index =>
    new Note({
      id: index,
      title: `Note ${index}`,
      body: 'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.'
    })
);

const Home: React.FC = () => {
  return <NotesList notes={data} />;
};

export { Home };
