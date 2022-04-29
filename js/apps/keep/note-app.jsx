import { NoteIndex } from './pages/note-index.jsx'
import { NoteDetails } from './pages/note-details.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export class NoteApp extends React.Component {
  render() {
    return (
      <Router>
        <main className="note-app">
          <Switch>
            <Route path="/keep/details/:noteId" component={NoteDetails} />
            <Route path="/keep" component={NoteIndex} />
          </Switch>
        </main>
      </Router>
    )
  }
}
