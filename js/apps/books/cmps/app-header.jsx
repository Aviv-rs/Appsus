const { Link, NavLink, withRouter } = ReactRouterDOM

function _AppHeader(props) {
  return (
    <header className="app-header">
      <h3 onClick={() => props.history.goBack()}>Noya's Bookstore</h3>

      <nav>
        <ul>
          <Link className="header-link" to="/">
            Home
          </Link>
          <Link className="header-link" to="/books">
            Books
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export const AppHeader = withRouter(_AppHeader)
