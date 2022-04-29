import { NotePreview } from './note-preview.jsx'

export function NoteList({
  notes,
  onDuplicateNote,
  onDeleteNote,
  onToggleTodo,
  onChangeStyle,
}) {
  return (
    <section className="note-list ">
      {notes.map(note => (
        <NotePreview
          onDuplicateNote={onDuplicateNote}
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
