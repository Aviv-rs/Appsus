import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes, onDeleteNote, onToggleTodo }) {
  return (
    <section className="note-list ">
      {notes.map(note => (
        <NotePreview
          onToggleTodo={onToggleTodo}
          onDeleteNote={onDeleteNote}
          note={note}
          key={note.id}
        />
      ))}
    </section>
  )
}
