import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteAdd } from '../cmps/note-add.jsx'

export class NoteIndex extends React.Component {
  state = {
    notes: null,
  }

  componentDidMount() {
    noteService.query().then(notes => this.setState({ notes }))
  }

  render() {
    const { notes } = this.state
    return (
      <section className="note-index">
        <NoteAdd />
        {notes && <NoteList notes={notes} />}
      </section>
    )
  }
}
