import { NoteTxt } from './dynamic-note-types/note-txt.jsx'
import { NoteImg } from './dynamic-note-types/note-img.jsx'
import { NoteTodos } from './dynamic-note-types/note-todos.jsx'

export function NotePreview({ note, onDeleteNote }) {
  switch (note.type) {
    case 'note-txt':
      return <NoteTxt onDeleteNote={onDeleteNote} note={note} />
    case 'note-img':
      return <NoteImg onDeleteNote={onDeleteNote} note={note} />
    case 'note-todos':
      return <NoteTodos onDeleteNote={onDeleteNote} note={note} />
    case 'note-video':
      return <NoteVideo onDeleteNote={onDeleteNote} note={note} />
  }
}
