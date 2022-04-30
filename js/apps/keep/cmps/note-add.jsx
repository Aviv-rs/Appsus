import { eventBusService } from '../../../services/event-bus-service.js'

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

  componentDidMount() {
    this.removeMailEvent = eventBusService.on('mail-to-note', mail =>
      console.log(mail)
    )
  }

  inputRef = React.createRef()

  placeholderRef = React.createRef()

  toggleNoteCompose = () => {
    this.setState({ isComposing: !this.state.isComposing })
  }

  onChangeType = ({ target }) => {
    const noteInput = this.inputRef.current
    const placeHolder = this.placeholderRef.current
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
      note: { ...prevState.note, info: { [field]: target.innerText } },
      isPlaceholder,
    }))
  }

  componentWillUnmount() {
    this.removeMailEvent()
  }

  render() {
    const { note, isPlaceholder, isComposing } = this.state
    const titleInputClass = isComposing ? '' : 'hidden'
    const placeholderClass = isPlaceholder
      ? 'note-info-placeholder'
      : 'note-info-placeholder hidden'
    return (
      <section
        onFocus={this.toggleNoteCompose}
        onBlur={this.toggleNoteCompose}
        className="note-add flex  justify-center column"
      >
        <div className={titleInputClass}>
          <div className="title-placeholder">Title</div>
          <div
            // onBlur={ev => {
            //   this.props.onAddNote(ev, note)
            //   this.setState({ isPlaceholder: true })
            // }}
            data-field="title"
            // onInput={this.handleChange}
            className="add-title-input "
            contentEditable="true"
            suppressContentEditableWarning="true"
          ></div>
        </div>

        <div>
          <div ref={this.placeholderRef} className={placeholderClass}>
            Take a note...
          </div>
          <div
            onBlur={ev => {
              this.props.onAddNote(ev, note)
              this.setState({ isPlaceholder: true })
            }}
            type="note-txt"
            data-field="txt"
            name="txt"
            ref={this.inputRef}
            onInput={this.handleChange}
            className="add-note-input"
            contentEditable="true"
            suppressContentEditableWarning="true"
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
        </div>
      </section>
    )
  }
}
