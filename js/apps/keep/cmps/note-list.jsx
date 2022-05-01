import { NotePreview } from './note-preview.jsx'

export function NoteList(props) {
  const { isPinnedNotes, notes } = props
  const noteListClass = isPinnedNotes ? 'note-list pinned-notes' : 'note-list'

  if (!notes.length) return <React.Fragment></React.Fragment>

  return (
    <React.Fragment>
      <section className={noteListClass}>
        {isPinnedNotes && (
          <div className="pinned-notes-title">
            <span>Pinned</span>{' '}
          </div>
        )}
        {notes.map((note, idx) => {
          if (!isPinnedNotes && note.isPinned)
            return <React.Fragment key={idx}></React.Fragment>
          else return <NotePreview {...props} note={note} key={note.id} />
        })}
      </section>
    </React.Fragment>
  )
}
