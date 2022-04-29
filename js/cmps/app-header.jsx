const { NavLink, withRouter } = ReactRouterDOM

export class _AppHeader extends React.Component {

  state = {
    isModalOpen: false
  }

  onToggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }

  render() {
    let { isModalOpen } = this.state
    return (
      <header className="app-header flex">
        <NavLink exact to="/"><img src="./assets/img/logo.png" className="header-image" /></NavLink>
        <nav className="page-nav flex">
          <img onClick={this.onToggleModal} className="page-link" src="./assets/img/menu.png" alt="" />
          {isModalOpen &&
            <div>
              <NavLink exact to="/"><img onClick={this.onToggleModal} src="./assets/img/home.png" alt="" /></NavLink>
              <NavLink  to="/about"><img onClick={this.onToggleModal} src="./assets/img/about.png" alt="" /></NavLink>
              <NavLink  to="/keep"><img onClick={this.onToggleModal} src="./assets/img/note.png" alt="" /></NavLink>
              <NavLink  to="/mail"><img onClick={this.onToggleModal} src="./assets/img/email.png" alt="" /></NavLink>
              <NavLink  to="/books"><img onClick={this.onToggleModal} src="./assets/img/book.png" alt="" /></NavLink>
            </div>
          }

          {/* <NavLink  className="page-link" exact to="/">
          Home
          </NavLink>
          <NavLink  className="page-link"  to="/about">
          About
        </NavLink> */}
        </nav>
      </header>
    )
  }
}

export const AppHeader = withRouter(_AppHeader)
