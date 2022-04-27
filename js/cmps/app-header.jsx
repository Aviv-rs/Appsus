const { NavLink, withRouter } = ReactRouterDOM

export function _AppHeader() {
  return (
    <header className="app-header flex">
      <img src="./assets/img/logo.png" className="header-image"/>
      <nav className="page-nav flex">
        <NavLink  className="page-link" exact to="/">
          Home
        </NavLink>
        <NavLink  className="page-link"  to="/about">
          About
        </NavLink>
      </nav>
    </header>
  )
}

export const AppHeader = withRouter(_AppHeader)
