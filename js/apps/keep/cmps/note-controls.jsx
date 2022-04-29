import { ColorPicker } from './color-picker.jsx'

export class NoteControls extends React.Component {
  state = {
    isPickingColor: false,
  }

  toggleColorPicker = isPickingColor => {
    this.setState({ isPickingColor: !isPickingColor })
  }

  render() {
    const { onDeleteNote, note, onChangeStyle } = this.props
    const { isPickingColor } = this.state
    return (
      <div className="note-controls">
        <button
          className="clean-btn btn-delete btn-note-edit"
          onClick={() => onDeleteNote(note.id)}
        >
          <img src="assets\img\delete.png" alt="" />
        </button>
        <button className="clean-btn btn-duplicate btn-note-edit">
          <img src="assets\img\keep-icons\duplicate.png" alt="" />
        </button>
        <button className="clean-btn btn-mail-note btn-note-edit">
          <img src="assets\img\keep-icons\note-mail.png" alt="" />
        </button>
        <button
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
