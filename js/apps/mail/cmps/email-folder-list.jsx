import { eventBusService } from "../../../services/event-bus-service.js"

const folders = [
  {title: 'Trash', type:'trash'}
]
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
          
         <div onClick={this.onShowType} className="flex mail-folder"> <img onClick={this.onShowType} className="folder-list-icon" src="assets/img/mail-icons/inbox.png" alt="" /><h3 className="email-folder-list-item" name="inbox">Inbox</h3></div>
         <div onClick={this.onShowType} className="flex mail-folder"> <img onClick={this.onShowType} className="folder-list-icon" src="assets/img/mail-icons/star.png" alt=""/><h3 className="email-folder-list-item" name="star">Starred</h3></div>
         <div onClick={this.onShowType} className="flex mail-folder"><img onClick={this.onShowType} className="folder-list-icon" src="assets/img/mail-icons/sent.png" alt=""/><h3 className="email-folder-list-item" name="sent">Sent Mail</h3></div>
         <div onClick={this.onShowType} className="flex mail-folder"> <img onClick={this.onShowType} className="folder-list-icon" src="assets/img/mail-icons/draft.png" alt=""/> <h3 className="email-folder-list-item" name="draft">Drafts</h3></div>
        </main>
      )
    }
  }