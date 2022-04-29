import { NoteTxt } from './dynamic-note-types/note-txt.jsx'
import { NoteImg } from './dynamic-note-types/note-img.jsx'
import { NoteTodos } from './dynamic-note-types/note-todos.jsx'
import { NoteVideo } from './dynamic-note-types/note-video.jsx'

export function NotePreview({
  onToggleTodo,
  onTogglePin,
  onDuplicateNote,
  note,
  onDeleteNote,
  onChangeStyle,
  noteIdx,
}) {
  switch (note.type) {
    case 'note-txt':
      return (
        <NoteTxt
          onDuplicateNote={onDuplicateNote}
          onChangeStyle={onChangeStyle}
          onDeleteNote={onDeleteNote}
          note={note}
          noteIdx={noteIdx}
          onTogglePin={onTogglePin}
        />
      )
    case 'note-img':
      return (
        <NoteImg
          onDuplicateNote={onDuplicateNote}
          onChangeStyle={onChangeStyle}
          onDeleteNote={onDeleteNote}
          note={note}
          noteIdx={noteIdx}
          onTogglePin={onTogglePin}
        />
      )
    case 'note-todos':
      return (
        <NoteTodos
          onDuplicateNote={onDuplicateNote}
          onChangeStyle={onChangeStyle}
          onDeleteNote={onDeleteNote}
          onToggleTodo={onToggleTodo}
          note={note}
          noteIdx={noteIdx}
          onTogglePin={onTogglePin}
        />
      )
    case 'note-video':
      return (
        <NoteVideo
          onDuplicateNote={onDuplicateNote}
          onChangeStyle={onChangeStyle}
          onDeleteNote={onDeleteNote}
          note={note}
          noteIdx={noteIdx}
          onTogglePin={onTogglePin}
        />
      )
  }
}
