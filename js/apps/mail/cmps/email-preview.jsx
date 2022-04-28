import {EmailFolderList} from "./email-folder-list.jsx"
import {EmailList} from "./email-list.jsx"
import {EmailFilter} from "./email-filter.jsx"

export class EmailPreview extends React.Component {
    render() {
      return (
        <main className="email-preview">
          <div className="mail-logo">
          <img className="mail-logo-img" src="assets/img/mail-icons/letters.png" alt="" />
          <h1>MailSus</h1>
          </div>
          <EmailFilter className="email-filter"/>
          <EmailList/>
          <EmailFolderList/>
        </main>
      )
    }
  }