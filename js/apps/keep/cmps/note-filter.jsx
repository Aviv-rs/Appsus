export class NoteFilter extends React.Component {
  state = {
    filterBy: {
      txt: '',
      type: '',
      label: '',
    },
  }

  handleChange = ({ target }) => {
    this.setState(
      prevState => ({ filterBy: { ...prevState.filterBy, txt: target.value } }),
      () => {
        this.props.onSetFilter(this.state.filterBy)
      }
    )
  }

  onFilter = ev => {
    ev.preventDefault()
    this.props.onSetFilter(this.state.filterBy)
  }

  render() {
    const {
      filterBy: { type, label },
    } = this.state
    return (
      <section className="note-filter">
        <form>
          <label htmlFor="by-search">
            <input
              onChange={this.handleChange}
              name="txt"
              type="search"
              placeholder="🔍︎ Search"
              autoComplete="off"
              className="note-search-input"
            />
          </label>
        </form>
      </section>
    )
  }
}
