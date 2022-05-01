const { Link, NavLink, withRouter } = ReactRouterDOM

function _AppHeader(props) {
  // console.log('Props from header', props);
  // Almost never use goBack -> it might send the user outside of the app.
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
// ****
// active class not necessary
// header not necessary here'
// nav with ul
// ****

export const AppHeader = withRouter(_AppHeader)

// export function AppHeader(){
//     return <h1>hello</h1>
// }
