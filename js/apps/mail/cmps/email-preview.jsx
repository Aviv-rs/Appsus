import { EmailFolderList } from "./email-folder-list.jsx"
import { EmailList } from "./email-list.jsx"
import { EmailFilter } from "./email-filter.jsx"


export class EmailPreview extends React.Component {

  state = {
    noteId: null,
    noteInfoTxt: null,
    noteInfoUrl: null,
  }

  componentDidMount() {
    if (this.props.noteId) { 
      console.log(this.props.noteId)
      this.setState({noteId: this.props.noteId})
    }
    if (this.props.noteInfoTxt) {
      console.log(this.props.noteInfoTxt)
      this.setState({noteInfoTxt: this.props.noteInfoTxt})
    }
    if (this.props.noteInfoUrl) {
      console.log(this.props.noteInfoUrl)
      this.setState({noteInfoUrl: this.props.noteInfoUrl})
    }
  }

  render() {
    const { noteId, noteInfoTxt,noteInfoUrl } = this.state
    return (
      <main className="email-preview">
        <div className="mail-logo">
          <img className="mail-logo-img" src="assets/img/mail-icons/letters.png" alt="" />
          <h1 className="mail-logo-header">MailSus</h1>
        </div>
        <EmailFilter className="email-filter" />
        <EmailList noteId={noteId} noteInfoTxt={noteInfoTxt} noteInfoUrl={noteInfoUrl}/>
        <EmailFolderList />
      </main>
    )
  }
}