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
    noteInput.value = ''
    this.setState(prevState => ({
      note: { ...prevState.note, type: type },
    }))
    if (type === 'note-img') {
      noteInput.placeholder = 'Insert img url'
      noteInput.name = 'url'
    } else if (type === 'note-txt') {
      noteInput.placeholder = 'Take a note...'
      noteInput.name = 'txt'
    } else if (type === 'note-todos') {
      noteInput.placeholder = 'Enter todos seperated by commas'
      noteInput.name = 'todos'
    } else {
      noteInput.placeholder = 'Insert video url'
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
      <section className="note-add flex align-center justify-center">
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
        <div className="flex note-type-controls">
          <button
            title={'Image note'}
            className="clean-btn btn-note-type"
            onClick={this.onChangeType}
          >
            <img
              src="assets/img/keep-icons/gallery.png"
              name="note-img"
              alt=""
            />
          </button>
          <button
            title={'Todo list note'}
            className="clean-btn btn-note-type"
            onClick={this.onChangeType}
          >
            <img
              name="note-todos"
              src="assets/img/keep-icons/to-do-list.png"
              alt=""
            />
          </button>
          <button
            title={'Video note'}
            className="clean-btn btn-note-type"
            onClick={this.onChangeType}
          >
            <img
              name="note-video"
              src="assets/img/keep-icons/video.png"
              alt=""
            />
          </button>
          <button
            title={'Text note'}
            className="clean-btn btn-note-type"
            onClick={this.onChangeType}
          >
            <img name="note-txt" src="assets/img/keep-icons/file.png" alt="" />
          </button>
        </div>
      </section>
    )
  }
}
