import { NoteTxt } from './dynamic-note-types/note-txt.jsx'

export function NotePreview({ note }) {
  switch (note.type) {
    case 'note-txt':
      return <NoteTxt note={note} />
    case 'note-img':
      return <NoteImg note={note} />
    case 'note-todos':
      return <NoteTodos note={note} />
  }
}
