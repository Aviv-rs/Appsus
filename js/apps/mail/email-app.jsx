import {EmailPreview} from "./cmps/email-preview.jsx"
import {eventBusService} from "../../services/event-bus-service.js"


export class EmailApp extends React.Component {
  state={
    selectedMail:null,
    filterBy: null,
    note: null
  }

  removeNoteEvent

  componentDidMount(){
    this.removeNoteEvent = eventBusService.on('note-to-mail', (newNote) => this.setState({note: newNote}))
  }

//  getNote=()=>{
//   return this.state.note
//  }

  render() {
    const {selectedMail,note} =this.state
    return (
      <main className="email-app">
        <EmailPreview note={note}/>
      </main>
    )
  }
}
