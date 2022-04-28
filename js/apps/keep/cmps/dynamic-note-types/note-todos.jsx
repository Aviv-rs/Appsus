export function NoteTodos({ note, onDeleteNote }) {
  function onToggleTodo({ target }) {}

  const todos = note.info.todos.split(',')

  return (
    <div className="note">
      <ul>
        {todos.map((todo, idx) => (
          <li
            data-done="todo"
            key={idx}
            onClick={onToggleTodo}
            className="todo"
          >
            {todo}
          </li>
        ))}
      </ul>
      <button onClick={() => onDeleteNote(note.id)}>Delete</button>
    </div>
  )
}
