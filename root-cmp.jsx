import { AppHome } from './js/pages/app-home.jsx'
import { AppAbout } from './js/pages/app-about.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
  return (
    <Router>
      <section className="app">
        <Switch>
          <Route path="/about" component={AppAbout} />
          <Route exact path="/" component={AppHome} />
        </Switch>
      </section>
    </Router>
  )
}
