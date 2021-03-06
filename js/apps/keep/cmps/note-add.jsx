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
    isPlaceholder: true,
    isComposing: false,
  }

  removeMailEvent

  inputRef = React.createRef()

  infoPlaceholderRef = React.createRef()

  titleInputRef = React.createRef()

  onDoneCompose = () => {
    this.setState({ isComposing: false })
    this.inputRef.current.innerText = ''
    this.titleInputRef.current.innerText = ''
  }

  onCompose = ev => {
    this.setState({ isComposing: true })
  }

  onChangeType = ({ target }) => {
    const noteInput = this.inputRef.current
    const placeHolder =
      target.type === 'title'
        ? this.titlePlaceholderRef.current
        : this.infoPlaceholderRef.current
    const type = target.name
    noteInput.innerText = ''
    this.setState(prevState => ({
      note: { ...prevState.note, type: type },
    }))
    if (type === 'note-img') {
      placeHolder.innerText = 'Insert img url'
      noteInput.setAttribute('data-field', 'url')
    } else if (type === 'note-txt') {
      placeHolder.innerText = 'Take a note...'
      noteInput.setAttribute('data-field', 'txt')
    } else if (type === 'note-todos') {
      placeHolder.innerText = 'Enter todos seperated by commas'
      noteInput.setAttribute('data-field', 'todos')
    } else {
      placeHolder.innerText = 'Insert video url'
      noteInput.setAttribute('data-field', 'url')
    }
  }

  handleChange = ({ target }) => {
    const field = target.getAttribute('data-field')
    const isPlaceholder = target.innerText ? false : true

    this.setState(prevState => ({
      note: {
        ...prevState.note,
        info: { ...prevState.note.info, [field]: target.innerText },
      },
      isPlaceholder,
    }))
  }

  render() {
    const { note, isPlaceholder, isComposing } = this.state
    const titleInputClass = isComposing ? '' : 'hidden'
    const openClass = isComposing ? 'open' : ''
    const placeholderClass = isPlaceholder
      ? 'note-info-placeholder'
      : 'note-info-placeholder hidden'
    return (
      <section
        name="add"
        className={`note-add flex  justify-center column ${openClass}`}
      >
        <div>
          <div
            className={`title-placeholder ${titleInputClass} ${placeholderClass}`}
          >
            Title
          </div>
          <div
            onInput={this.handleChange}
            data-field="title"
            type="title"
            className={`add-title-input ${titleInputClass}`}
            contentEditable="true"
            onFocus={this.onCompose}
            suppressContentEditableWarning="true"
            ref={this.titleInputRef}
          ></div>
        </div>

        <div>
          <div ref={this.infoPlaceholderRef} className={placeholderClass}>
            Take a note...
          </div>
          <div
            type="note-txt"
            data-field="txt"
            name="txt"
            ref={this.inputRef}
            onInput={this.handleChange}
            className="add-note-input"
            contentEditable="true"
            suppressContentEditableWarning="true"
            onFocus={this.onCompose}
          ></div>
        </div>

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
          <button
            className={`clean-btn btn-note-type btn-add ${titleInputClass}`}
            onClick={() => {
              this.props.onAddNote(note)
              this.setState({ isPlaceholder: true })
              this.onDoneCompose()
            }}
          >
            Close
          </button>
        </div>
      </section>
    )
  }
}
