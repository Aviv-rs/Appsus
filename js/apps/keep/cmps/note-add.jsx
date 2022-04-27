export class NoteAdd extends React.Component {
  state = {
    note: null,
  }

  render() {
    return (
      <form>
        <label htmlFor="add-note">
          <input type="text" />
        </label>
      </form>
    )
  }
}
