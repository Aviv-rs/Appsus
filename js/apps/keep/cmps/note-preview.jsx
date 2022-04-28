import { NoteTxt } from './dynamic-note-types/note-txt.jsx'
import { NoteImg } from './dynamic-note-types/note-img.jsx'
import { NoteTodos } from './dynamic-note-types/note-todos.jsx'

export function NotePreview({
  onToggleTodo,
  note,
  onDeleteNote,
  onChangeStyle,
}) {
  switch (note.type) {
    case 'note-txt':
      return (
        <NoteTxt
          onChangeStyle={onChangeStyle}
          onDeleteNote={onDeleteNote}
          note={note}
        />
      )
    case 'note-img':
      return (
        <NoteImg
          onChangeStyle={onChangeStyle}
          onDeleteNote={onDeleteNote}
          note={note}
        />
      )
    case 'note-todos':
      return (
        <NoteTodos
          onChangeStyle={onChangeStyle}
          onDeleteNote={onDeleteNote}
          onToggleTodo={onToggleTodo}
          note={note}
        />
      )
    case 'note-video':
      return (
        <NoteVideo
          onChangeStyle={onChangeStyle}
          onDeleteNote={onDeleteNote}
          note={note}
        />
      )
  }
}
