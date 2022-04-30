import { EmailFolderList } from "./email-folder-list.jsx"
import { EmailList } from "./email-list.jsx"
import { EmailFilter } from "./email-filter.jsx"


export class EmailPreview extends React.Component {


  render() {
    const { noteId, noteInfoTxt,noteInfoUrl } = this.props
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