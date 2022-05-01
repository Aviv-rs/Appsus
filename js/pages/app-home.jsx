const { Link } = ReactRouterDOM

export function AppHome() {
  return (
    <section className="app-home slide-in-fwd-center">
      <object
        className="hero-home"
        data="assets\img\hero-cropped.svg"
        width="600"
        height="550"
      >
        {' '}
      </object>
      <div className="bg-circle-container">
        <img
          className="home-bg-circle rotate-center"
          src="assets\img\background-circle.png"
          alt="animated background circle"
        />
      </div>
      <main className="tracking-in-expand-fwd welcome-section">
        <p className="welcome-to-txt">Welcome to</p>
        <h1 className="appsus-title">Appsus</h1>
        <h3 className="explore-apps-txt">Explore our apps</h3>
        <ul className="home-app-links clean-list">
          <Link className="home-app-link" to={'/mail'}>
            Mail
          </Link>
          <Link className="home-app-link" to={'/keep'}>
            {' '}
            Keep
          </Link>
          <Link className="home-app-link" to={'/books'}>
            {' '}
            Books
          </Link>
        </ul>
      </main>
    </section>
  )
}
