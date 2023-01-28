import React from 'react';
import { Note } from '../../models/Note';
import { NotesList } from './components/NotesList';

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
