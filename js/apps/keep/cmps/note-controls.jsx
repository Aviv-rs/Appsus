import { ColorPicker } from './color-picker.jsx'
import { eventBusService } from '../../../services/event-bus-service.js'
const { Link } = ReactRouterDOM

export class NoteControls extends React.Component {
  state = {
    isPickingColor: false,
  }
  removeMailEvent

  // componentDidMount(){
  //   this.removeMailEvent = eventBusService.on('mail-to-note',(mail)=>this.props.renderMailAsNote)

  // }

  onMailNote=(note)=> {
    eventBusService.emit('note-to-mail', note)
  }

  toggleColorPicker = isPickingColor => {
    this.setState({ isPickingColor: !isPickingColor })
  }

  render() {
    const { onDeleteNote, note, onChangeStyle, onDuplicateNote, onTogglePin } =
      this.props
    const { isPickingColor } = this.state
    const controlsClass = isPickingColor
      ? 'note-controls active'
      : 'note-controls'
    return (
      <div className={controlsClass}>
        <button
          title="Delete note"
          className="clean-btn btn-delete btn-note-edit"
          onClick={() => onDeleteNote(note.id)}
        >
          <img src="assets\img\delete.png" alt="" />
        </button>
        <button
          title="Duplicate note"
          onClick={() => onDuplicateNote(note.id)}
          className="clean-btn btn-duplicate btn-note-edit"
        >
          <img src="assets\img\keep-icons\duplicate.png" alt="" />
        </button>

        <Link to="/mail">
          <button
            title="Send note as mail"
            className="clean-btn btn-mail-note btn-note-edit"
            onClick={() => this.onMailNote(note)}
          >
            <img src="assets\img\keep-icons\note-mail.png" alt="" />
          </button>
        </Link>

        {!note.isPinned && (
          <button
            title="Pin note"
            className="clean-btn btn-pin btn-note-edit"
            onClick={() => onTogglePin(note.id)}
          >
            <img src="assets\img\keep-icons\note-pin.png" alt="" />
          </button>
        )}
        {note.isPinned && (
          <button
            title="Unpin note"
            className="clean-btn btn-unpin btn-note-edit"
            onClick={() => onTogglePin(note.id)}
          >
            <img src="assets\img\keep-icons\note-unpin.png" alt="" />
          </button>
        )}

        <button
          title="Note color options"
          className="clean-btn btn-color btn-note-edit"
          onClick={() => this.toggleColorPicker(isPickingColor)}
        >
          <img src="assets\img\keep-icons\color-palette.png" alt="" />
        </button>
        {isPickingColor && (
          <ColorPicker onChangeStyle={onChangeStyle} note={note} />
        )}
      </div>
    )
  }
}
