export class NoteAdd extends React.Component {
  state = {
    note: {
      type: 'note-txt',
      info: {
        txt: '',
      },
      isPinned: false,
      style: {},
    },
  }
  inputRef = React.createRef()

  onChangeType = ({ target }) => {
    const noteInput = this.inputRef.current
    const type = target.name
    this.setState(prevState => ({
      note: { ...prevState.note, type: type },
    }))
    if (type === 'note-img') {
      noteInput.placeholder = 'Insert img url'
      noteInput.name = 'url'
    }
  }

  handleChange = ({ target }) => {
    const field = target.name

    this.setState(prevState => ({
      note: { ...prevState.note, info: { [field]: target.value } },
    }))
  }

  render() {
    const { note } = this.state
    const { info, isPinned, style } = note
    return (
      <section className="note-add flex justify-center">
        <form onSubmit={ev => this.props.onAddNote(ev, note)}>
          <label htmlFor="add-note">
            <input
              ref={this.inputRef}
              autoComplete="off"
              onChange={this.handleChange}
              name="txt"
              placeholder="Take a note..."
              type="text"
            />
          </label>
        </form>
        <button onClick={this.onChangeType} name="note-img">
          Add image
        </button>
        <button onClick={this.onChangeType} name="note-todos">
          Add todo-list
        </button>
        <button onClick={this.onChangeType} name="note-video">
          Add video
        </button>
        <button onClick={this.onChangeType} name="note-txt">
          Add text
        </button>
      </section>
    )
  }
}
