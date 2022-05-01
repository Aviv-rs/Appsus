import { NoteTxt } from './dynamic-note-types/note-txt.jsx'
import { NoteImg } from './dynamic-note-types/note-img.jsx'
import { NoteTodos } from './dynamic-note-types/note-todos.jsx'
import { NoteVideo } from './dynamic-note-types/note-video.jsx'

export function NotePreview(props) {
  switch (props.note.type) {
    case 'note-txt':
      return <NoteTxt {...props} />
    case 'note-img':
      return <NoteImg {...props} />
    case 'note-todos':
      return <NoteTodos {...props} />
    case 'note-video':
      return <NoteVideo {...props} />
  }
}
