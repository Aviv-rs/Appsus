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
        <nav className="flex">
          <img className="page-nav" onClick={this.onToggleModal} src="./assets/img/menu.png" alt="" />
          {isModalOpen &&
            <div className="menu-modal">
              <div className="menu-nav">
                <NavLink exact to="/"><img onClick={this.onToggleModal} src="./assets/img/home.png" alt="" /></NavLink>
              <h4>Home</h4>
                </div>
                <div className="menu-nav">
                <NavLink to="/books"><img onClick={this.onToggleModal} src="./assets/img/book.png" alt="" /></NavLink>
              <h4>Books</h4>
                </div>
              <div className="menu-nav">
                <NavLink to="/keep"><img onClick={this.onToggleModal} src="./assets/img/note.png" alt="" /></NavLink>
              <h4>Keep</h4>
                </div>
              <div className="menu-nav">
                <NavLink to="/mail"><img onClick={this.onToggleModal} src="./assets/img/email.png" alt="" /></NavLink>
              <h4>Mail</h4>
                </div>
              <div className="menu-nav">
                <NavLink to="/about"><img onClick={this.onToggleModal} src="./assets/img/about.png" alt="" /></NavLink>
              <h4>About</h4>
                </div>
            </div>
            
          }
        </nav>
      </header>
    )
  }
}

export const AppHeader = withRouter(_AppHeader)
