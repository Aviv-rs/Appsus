const { Link } = ReactRouterDOM

export function AppHome() {
  return (
    <section className="app-home flex">
      <h1>Welcome to Appsus!</h1>
      <h3>Check us out!</h3>
      <h4 className="links"><Link to={'/mail'}>Mail |</Link>
      <Link to={'/keep'}> Keep |</Link>
      <Link to={'/books'}> Books</Link></h4>
    </section>
  )
}
