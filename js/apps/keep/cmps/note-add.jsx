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
        <button
          className="clean-btn btn-note-type"
          onClick={this.onChangeType}
          name="note-img"
        >
          <img src="assets/img/keep-icons/gallery.png" alt="" />
        </button>
        <button
          className="clean-btn btn-note-type"
          onClick={this.onChangeType}
          name="note-todos"
        >
          <img src="assets/img/keep-icons/to-do-list.png" alt="" />
        </button>
        <button
          className="clean-btn btn-note-type"
          onClick={this.onChangeType}
          name="note-video"
        >
          <img src="assets/img/keep-icons/video.png" alt="" />
        </button>
        <button
          className="clean-btn btn-note-type"
          onClick={this.onChangeType}
          name="note-txt"
        >
          <img src="assets/img/keep-icons/file.png" alt="" />
        </button>
      </section>
    )
  }
}
