import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteAdd } from '../cmps/note-add.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'

export class NoteIndex extends React.Component {
  state = {
    notes: null,
    filterBy: null,
  }

  onAddNote = (ev, note) => {
    ev.preventDefault()
    if (!note.info.txt && !note.info.url && !note.info.todos) return
    noteService.addNote(note).then(this.loadNotes())
  }

  onDeleteNote = noteId => {
    noteService.deleteNote(noteId).then(this.loadNotes())
  }

  onToggleTodo = (todoId, noteId) => {
    noteService.toggleTodo(todoId, noteId).then(this.loadNotes())
  }

  componentDidMount() {
    this.loadNotes()
  }

  loadNotes = () => {
    noteService.query().then(notes => this.setState({ notes }))
  }

  onChangeStyle = (noteId, style) => {
    noteService.changeStyle(noteId, style).then(this.loadNotes)
  }

  onSetFilter = filterBy => {
    this.setState({ filterBy }, () => this.loadNotes())
  }

  render() {
    const { notes } = this.state
    return (
      <section className="note-index">
        <NoteFilter onSetFilter={this.onSetFilter} />
        {/* <input className="filter-input" type="text" placeholder="  ︎  Search note" /> */}

        <NoteAdd onAddNote={this.onAddNote} />
        {notes && (
          <NoteList
            onChangeStyle={this.onChangeStyle}
            onToggleTodo={this.onToggleTodo}
            onDeleteNote={this.onDeleteNote}
            notes={notes}
          />
        )}
      </section>
    )
  }
}
