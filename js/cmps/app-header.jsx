const { NavLink, withRouter } = ReactRouterDOM

export function _AppHeader() {
  return (
    <header className="app-header">
      <h1 className="header-title">Apsus</h1>
      <nav className="page-nav">
        <NavLink exact to="/">
          Home
        </NavLink>
      </nav>
    </header>
  )
}

export const AppHeader = withRouter(_AppHeader)
