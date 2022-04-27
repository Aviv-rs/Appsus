export class NoteAdd extends React.Component {
  state = {
    note: {
      info: {
        txt: '',
      },
      isPinned: false,
      style: {},
    },
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
      <form onSubmit={ev => this.props.onAddNote(ev, note)}>
        <label htmlFor="add-note">
          <input
            autoComplete="off"
            onChange={this.handleChange}
            value={info.txt}
            name="txt"
            placeholder="Take a note..."
            type="text"
          />
        </label>
      </form>
    )
  }
}
