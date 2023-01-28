class Note {
  id!: number;
  title!: string;
  body!: string;

  constructor(data: Partial<Note>) {
    Object.assign(this, data);
  }
}

export { Note };
