

export class EmailFolderList extends React.Component {

  
  render() {
      return (
        <main className="email-folder-list">
          
          <h3><img className="folder-list-icon" src="assets/img/mail-icons/inbox.png" alt="" />Inbox</h3>
          <h3><img className="folder-list-icon" src="assets/img/mail-icons/star.png" alt="" />Starred</h3>
          <h3><img className="folder-list-icon" src="assets/img/mail-icons/sent.png" alt="" />Sent Mail</h3>
          <h3><img className="folder-list-icon" src="assets/img/mail-icons/draft.png" alt="" />Drafts</h3>
        </main>
      )
    }
  }