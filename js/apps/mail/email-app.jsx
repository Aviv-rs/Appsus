import { EmailPreview } from './cmps/email-preview.jsx'
import { eventBusService } from '../../services/event-bus-service.js'

export class EmailApp extends React.Component {
  state = {
    selectedMail: null,
    filterBy: null,
    note: null,
  }
  

  componentDidMount(){
    const urlSrcPrm = new URLSearchParams(this.props.location.search)
  
    const noteId = urlSrcPrm.get('noteId')
    if (noteId) {
      // console.log(noteId)
      this.setState({note: noteId})
    }
  }
  

  

  render() {
    const { note } = this.state
    return (
      <main className="email-app">
        <EmailPreview note={note}/>
      </main>
    )
  }
}
