import { eventBusService } from "../../../services/event-bus-service.js"

export class EmailFolderList extends React.Component {
  state={
      mailType: ''
  }

  onShowType=({target})=>{
    this.setState({mailType: target.innerText})
    eventBusService.emit('folder-submit', target.innerText)
  }
 

  render() {
      return (
        <main className="email-folder-list">
          
          <h3 className="email-folder-list-item" onClick={this.onShowType} name="inbox"><img className="folder-list-icon" src="assets/img/mail-icons/inbox.png" alt="" />Inbox</h3>
          <h3 className="email-folder-list-item" onClick={this.onShowType} name="star"><img className="folder-list-icon" src="assets/img/mail-icons/star.png" alt=""/>Starred</h3>
          <h3 className="email-folder-list-item" onClick={this.onShowType} name="sent"><img className="folder-list-icon" src="assets/img/mail-icons/sent.png" alt=""/>Sent Mail</h3>
          <h3 className="email-folder-list-item" onClick={this.onShowType} name="draft"><img className="folder-list-icon" src="assets/img/mail-icons/draft.png" alt=""/>Drafts</h3>
        </main>
      )
    }
  }