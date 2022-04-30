import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/note-list.jsx'
import { NoteAdd } from '../cmps/note-add.jsx'
import { NoteFilter } from '../cmps/note-filter.jsx'

export class NoteIndex extends React.Component {
  state = {
    notes: null,
    filterBy: null,
    pinnedNotes: null,
  }

  onAddNote = (ev, note) => {
    ev.preventDefault()
    ev.target[0].value = ''
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

  loadNotes = filterBy => {
    noteService.query(filterBy).then(notes => {
      const pinnedNotes = this.getPinnedNotes(notes)
      this.setState({ notes, pinnedNotes })
    })
  }

  getPinnedNotes = notes => {
    return notes.filter(note => note.isPinned)
  }

  onChangeStyle = (noteId, style) => {
    noteService.changeStyle(noteId, style).then(this.loadNotes)
  }

  onDuplicateNote = noteId => {
    noteService.duplicateNote(noteId).then(this.loadNotes)
  }

  onTogglePin = noteId => {
    noteService.togglePin(noteId).then(this.loadNotes)
  }

  onSetFilter = filterBy => {
    this.setState({ filterBy }, () => this.loadNotes(filterBy))
  }

  render() {
    const { notes, pinnedNotes } = this.state

    return (
      <section className="note-index">
        <NoteFilter onSetFilter={this.onSetFilter} />

        <NoteAdd onAddNote={this.onAddNote} />
        {pinnedNotes && (
          <React.Fragment>
            <NoteList
              onDuplicateNote={this.onDuplicateNote}
              onChangeStyle={this.onChangeStyle}
              onToggleTodo={this.onToggleTodo}
              onDeleteNote={this.onDeleteNote}
              onTogglePin={this.onTogglePin}
              notes={pinnedNotes}
              isPinnedNotes={true}
            />
          </React.Fragment>
        )}
        {notes && (
          <React.Fragment>
            <NoteList
              onDuplicateNote={this.onDuplicateNote}
              onChangeStyle={this.onChangeStyle}
              onToggleTodo={this.onToggleTodo}
              onDeleteNote={this.onDeleteNote}
              onTogglePin={this.onTogglePin}
              notes={notes}
              isPinnedNotes={false}
            />
          </React.Fragment>
        )}
      </section>
    )
  }
}
