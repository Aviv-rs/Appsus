import { NoteControls } from '../note-controls.jsx'

export class NoteTodos extends React.Component {
  state = {
    todos: null,
  }

  componentDidMount() {
    const { todos } = this.props.note.info
    this.setState({ todos })
  }

  onTodoClicked = (todoIdx, isDone) => {
    const { todos } = this.state
    todos[todoIdx].isDone = !isDone
    this.setState({ todos })
  }

  render() {
    const { todos } = this.state
    const { note, onDeleteNote, onChangeStyle, onDuplicateNote, noteIdx } =
      this.props
    if (!todos) return <div className="loader">loading...</div>
    return (
      <div style={note.style} className="note note-todos">
        <ul>
          {todos.map((todo, idx) => {
            const todoClass = todo.isDone ? 'todo done' : 'todo'

            return (
              <li
                data-done="todo"
                key={idx}
                onClick={() => {
                  this.props.onToggleTodo(todo.id, note.id)
                  this.onTodoClicked(idx, todo.isDone)
                }}
                className={todoClass}
              >
                {todo.txt}
              </li>
            )
          })}
        </ul>
        <NoteControls
          note={note}
          onChangeStyle={onChangeStyle}
          onDeleteNote={onDeleteNote}
          onDuplicateNote={onDuplicateNote}
          noteIdx={noteIdx}
        />
      </div>
    )
  }
}
