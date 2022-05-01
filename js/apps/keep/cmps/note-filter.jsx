export class NoteFilter extends React.Component {
  state = {
    filterBy: {
      txt: '',
      type: '',
      label: '',
    },
  }

  handleChange = ({ target }) => {
    const field = target.name
    this.setState(
      prevState => ({
        filterBy: { ...prevState.filterBy, [field]: target.value },
      }),
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
    return (
      <section className="note-filter">
        <form className="flex">
          <div className="filter-type-container">
            <select
              name="type"
              onChange={this.handleChange}
              className="filter-type-select"
            >
              <option value={''}>Filter by:</option>
              <option value="note-img">Images</option>
              <option value="note-video">Videos</option>
              <option value="note-todos">Todo-list</option>
            </select>
            <span className="custom-arrow"></span>
          </div>
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
