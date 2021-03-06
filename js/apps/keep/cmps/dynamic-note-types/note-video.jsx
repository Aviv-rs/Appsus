import { NoteControls } from '../note-controls.jsx'

export function NoteVideo({
  note,
  onDeleteNote,
  onChangeStyle,
  onDuplicateNote,
  onTogglePin,
}) {
  const videoId = new URLSearchParams(note.info.url).get(
    'https://www.youtube.com/watch?v'
  )

  return (
    <div style={note.style} className="note note-video">
      <iframe
        width={'100%'}
        height={'100%'}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder={0}
        allow={'fullscreen'}
      ></iframe>
      <p className="note-title">{note.info.title}</p>

      <NoteControls
        note={note}
        onChangeStyle={onChangeStyle}
        onDeleteNote={onDeleteNote}
        onDuplicateNote={onDuplicateNote}
        onTogglePin={onTogglePin}
      />
    </div>
  )
}
