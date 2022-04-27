import {EmailFolderList} from "./email-folder-list.jsx"
import {EmailList} from "./email-list.jsx"
import {EmailFilter} from "./email-filter.jsx"

export class EmailPreview extends React.Component {
    render() {
      return (
        <main className="email-preview">
          <h2>Email Preview</h2>
          <EmailFilter/>
          <EmailList/>
          <EmailFolderList/>
        </main>
      )
    }
  }