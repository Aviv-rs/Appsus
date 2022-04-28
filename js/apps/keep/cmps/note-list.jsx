import { NotePreview } from './note-preview.jsx'

export function NoteList({ notes, onDeleteNote }) {
  return (
    <section className="note-list ">
      {notes.map(note => (
        <NotePreview onDeleteNote={onDeleteNote} note={note} key={note.id} />
      ))}
    </section>
  )
}
