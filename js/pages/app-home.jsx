const { Link } = ReactRouterDOM

export function AppHome() {
  return (
    <section className="app-home ">
      <object
        className="hero-home"
        data="assets\img\hero-cropped.svg"
        width="600"
        height="600"
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
      <main className="welcome-section">
        <p className="welcome-to-txt">Welcome to</p>
        <h1 className="appsus-title">Appsus</h1>
        <h3 className="explore-apps-txt">Explore our apps</h3>
        <h4 className="home-app-links">
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
        </h4>
      </main>
    </section>
  )
}
