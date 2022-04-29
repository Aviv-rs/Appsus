import { ColorPicker } from './color-picker.jsx'

export class NoteControls extends React.Component {
  state = {
    isPickingColor: false,
  }

  toggleColorPicker = isPickingColor => {
    this.setState({ isPickingColor: !isPickingColor })
  }

  render() {
    const {
      onDeleteNote,
      note,
      noteIdx,
      onChangeStyle,
      onDuplicateNote,
      onTogglePin,
    } = this.props
    const { isPickingColor } = this.state
    return (
      <div className="note-controls">
        <button
          title="Delete note"
          className="clean-btn btn-delete btn-note-edit"
          onClick={() => onDeleteNote(note.id)}
        >
          <img src="assets\img\delete.png" alt="" />
        </button>
        <button
          title="Duplicate note"
          onClick={() => onDuplicateNote(noteIdx)}
          className="clean-btn btn-duplicate btn-note-edit"
        >
          <img src="assets\img\keep-icons\duplicate.png" alt="" />
        </button>

        <button
          title="Send note as mail"
          className="clean-btn btn-mail-note btn-note-edit"
        >
          <img src="assets\img\keep-icons\note-mail.png" alt="" />
        </button>
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
        <button
          title="Pin note"
          className="clean-btn btn-pin btn-note-edit"
          onClick={() => onTogglePin(note.id)}
        >
          <img src="assets\img\keep-icons\note-pin.png" alt="" />
        </button>
      </div>
    )
  }
}
