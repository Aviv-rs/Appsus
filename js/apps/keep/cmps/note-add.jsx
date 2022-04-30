import { eventBusService } from '../../../services/event-bus-service'

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
    placeholderStyle: { display: 'block' },
  }

  removeMailEvent

  componentDidMount() {
    this.removeMailEvent = eventBusService.on('mail-to-note', mail =>
      console.log(mail)
    )
  }

  componentWillUnmount() {
    this.removeMailEvent()
  }

  inputRef = React.createRef()

  placeholderRef = React.createRef()

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

    this.setState(prevState => ({
      note: { ...prevState.note, info: { [field]: target.innerText } },
    }))
  }

  render() {
    const { note } = this.state
    const { info, isPinned, style } = note
    return (
      <section className="note-add flex align-center justify-center">
        <div ref={this.placeholderRef} className="note-info-placeholder">
          Take a note...
        </div>
        <div
          onBlur={ev => this.props.onAddNote(ev, note)}
          type="note-txt"
          data-field="txt"
          name="txt"
          ref={this.inputRef}
          onInput={this.handleChange}
          className="custom-input"
          contentEditable="true"
          suppressContentEditableWarning="true"
        ></div>

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
