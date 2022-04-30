import { AppHome } from './js/pages/app-home.jsx'
import { AppAbout } from './js/pages/app-about.jsx'
import { AppFooter } from './js/cmps/app-footer.jsx'
import { AppHeader } from './js/cmps/app-header.jsx'
import { NoteApp } from './js/apps/keep/note-app.jsx'
import { EmailApp } from './js/apps/mail/email-app.jsx'
import {EmailDetails} from './js/apps/mail/pages/email-details.jsx'
import {BookApp} from './js/apps/books/book-app.jsx'
import { BookDetails } from './js/apps/books/pages/book-details.jsx'
import { BookReview } from './js/apps/books/pages/book-review.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
  return (
    <Router>
      <AppHeader />
      <main className="app">
        <Switch>
          <Route path="/books/review/:bookId" component={BookReview} />
          <Route path="/books/:bookId" component={BookDetails} />
          <Route path="/mail/:mailId" component={EmailDetails} />
          <Route path="/books" component={BookApp} />
          <Route path="/mail" component={EmailApp} />
          <Route path="/keep" component={NoteApp} />
          <Route path="/about" component={AppAbout} />
          <Route exact path="/" component={AppHome} />
        </Switch>
      </main>
      <AppFooter />
    </Router>
  )
}
