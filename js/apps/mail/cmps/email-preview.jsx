import { EmailFolderList } from "./email-folder-list.jsx"
import { EmailList } from "./email-list.jsx"
import { EmailFilter } from "./email-filter.jsx"


export class EmailPreview extends React.Component {

  state = {
    note: null
  }

  componentDidMount() {
    this.setState({note: this.props.note})
  }

  render() {
    const {note} = this.state
    return (
      <main className="email-preview">
        <div className="mail-logo">
          <img className="mail-logo-img" src="assets/img/mail-icons/letters.png" alt="" />
          <h1 className="mail-logo-header">MailSus</h1>
        </div>
        <EmailFilter className="email-filter" />
        <EmailList note={note}/>
        <EmailFolderList />
      </main>
    )
  }
}