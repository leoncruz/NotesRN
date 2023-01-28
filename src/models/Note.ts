class Note {
  id!: number;
  title!: String;
  body!: String;

  constructor(data: Partial<Note>) {
    Object.assign(this, data);
  }
}

export { Note };
