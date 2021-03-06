import { emailService } from '../services/email.service.js'
import { EmailCompose } from './email-compose.jsx'
import { eventBusService } from '../../../services/event-bus-service.js'
import { utilService } from '../../../services/util.service.js'
const { withRouter } = ReactRouterDOM
const { Link } = ReactRouterDOM

export class _EmailList extends React.Component {
  state = {
    mails: [],
    unReadCount: 0,
    compose: false,
    filter: '',
    folder: '',
    sortModal: false,
    noteId: null,
    noteInfoTxt: null,
    noteInfoUrl: null,
  }
  removeFilterEvent
  removeFolderEvent

  componentDidMount() {
    const urlSrcPrm = new URLSearchParams(this.props.location.search)

    const noteId = urlSrcPrm.get('noteId')
    const noteInfoTxt = urlSrcPrm.get('noteInfoTxt')
    const noteInfoUrl = urlSrcPrm.get('noteInfoUrl')
    if (noteId) {
      this.setState({
        noteId: noteId,
        noteInfoTxt: noteInfoTxt,
        noteInfoUrl: noteInfoUrl,
      })
    }

    this.loadMails()
    this.removeFilterEvent = eventBusService.on('filter-submit', filter =>
      this.getFilter(filter)
    )
    this.removeFolderEvent = eventBusService.on('folder-submit', folder =>
      this.getFolder(folder)
    )
  }

  renderNote = note => {
    this.onToggleCompose()
    console.log(note)
  }

  getFilter = info => {
    this.setState({ filter: info }, () => this.loadMails())
  }

  getFolder = info => {
    this.setState({ folder: info }, () => this.loadMails())
  }

  loadMails = () => {
    let { filter, folder } = this.state
    emailService.query(filter, folder).then(mails => {
      this.setState({ mails })
      this.setState({ unReadCount: 0 })
      mails.forEach(mail => {
        if (mail.isRead === false) {
          this.setState({ unReadCount: this.state.unReadCount + 1 })
        }
      })
    })
  }

  onMarkUnread = (ev, mailId) => {
    ev.preventDefault()
    emailService.markAsUnread(mailId).then(this.loadMails)
  }

  onDeleteMail = (ev, mailId) => {
    ev.preventDefault()
    emailService.removeMail(mailId).then(this.loadMails)
  }

  onToggleCompose = boolean => {
    if (boolean === false) {
      this.setState({ noteId: null, noteInfoTxt: null, noteInfoUrl: null })
    }
    this.setState({ compose: boolean })
  }

  onComposeNote = (type, txt, url) => {
    console.log(type)
    console.log(txt)
    console.log(url)
  }

  onToggleSortModal = () => {
    this.setState({ sortModal: !this.state.sortModal })
  }

  onSortBy = ({ target }) => {
    this.onToggleSortModal()
    emailService.sortMail(target.innerText).then(this.loadMails)
  }

  onShortMailBody = body => {
    return body.slice(1, 50)
  }

  getDate = date => {
    return utilService.getDateIntl(date)
  }

  componentWillUnmount() {
    this.removeFilterEvent()
    this.removeFolderEvent()
  }

  render() {
    let { mails, unReadCount, compose, sortModal } = this.state
    let mailReadColor
    return (
      <main className="email-list">
        {unReadCount.toString() > 0 && (
          <span className="unread-mails">{unReadCount}</span>
        )}
        <button
          onClick={() => this.onToggleCompose(true)}
          className="compose-btn"
        >
          + compose
        </button>
        <img
          onClick={this.onToggleSortModal}
          className="three-dots-btn"
          src="assets/img/three-dots.png"
        ></img>
        {sortModal && (
          <div className="sort-modal">
            <p onClick={this.onSortBy} className="sort-type">
              Oldest to Newest
            </p>
            <p onClick={this.onSortBy} className="sort-type">
              Newest to Oldest
            </p>
            <p onClick={this.onSortBy} className="sort-type">
              A-Z
            </p>
            <p onClick={this.onSortBy} className="sort-type">
              Z-A
            </p>
          </div>
        )}
        {mails && (
          <ul className="email-preview flex">
            {mails.map(mail => {
              {
                mailReadColor = mail.isRead ? 'read' : ''
              }
              return (
                <Link
                  className={`link-to-details ${mailReadColor}`}
                  to={`/mail/${mail.id}`}
                  key={mail.id}
                >
                  <li className="email-line">
                    <span className="mail-subject">{mail.subject}</span>
                    <span className="mail-body">
                      {this.onShortMailBody(mail.body)}...
                    </span>
                    <span className="mail-date">
                      {this.getDate(mail.sentAt)}
                    </span>
                    <div className="list-btn flex">
                      <img
                        onClick={event => this.onMarkUnread(event, mail.id)}
                        className="mark-unread"
                        src="assets/img/mail-icons/mark-unread.png"
                      ></img>
                      <img
                        onClick={event => this.onDeleteMail(event, mail.id)}
                        className="delete-btn"
                        src="assets/img/delete.png"
                      ></img>
                    </div>
                  </li>
                </Link>
              )
            })}
          </ul>
        )}
        {(compose || this.state.noteId) && (
          <EmailCompose
            onComposeNote={this.onComposeNote}
            onToggleCompose={this.onToggleCompose}
            type={this.state.noteId}
            txt={this.state.noteInfoTxt}
            url={this.state.noteInfoUrl}
          />
        )}
      </main>
    )
  }
}
export const EmailList = withRouter(_EmailList)
