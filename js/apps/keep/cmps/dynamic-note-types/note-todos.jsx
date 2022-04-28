import { NoteControls } from '../note-controls.jsx'

export class NoteTodos extends React.Component {
  state = {
    todos: null,
  }

  componentDidMount() {
    const { todos } = this.props.note.info
    this.setState({ todos })
  }

  render() {
    const { todos } = this.state
    const { note, onDeleteNote } = this.props
    if (!todos) return <div className="loader">loading...</div>
    return (
      <div className="note note-todos">
        <ul>
          {todos.map((todo, idx) => (
            <li
              data-done="todo"
              key={idx}
              onClick={() => this.props.onToggleTodo(todo.isDone)}
              className="todo"
            >
              {todo.txt}
            </li>
          ))}
        </ul>
        <NoteControls note={note} onDeleteNote={onDeleteNote} />
      </div>
    )
  }
}
