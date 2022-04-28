import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes, onDeleteNote, onToggleTodo, onChangeStyle }) {
  return (
    <section className="note-list ">
      {notes.map(note => (
        <NotePreview
          onChangeStyle={onChangeStyle}
          onToggleTodo={onToggleTodo}
          onDeleteNote={onDeleteNote}
          note={note}
          key={note.id}
        />
      ))}
    </section>
  )
}
