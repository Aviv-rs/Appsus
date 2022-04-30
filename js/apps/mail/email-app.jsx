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
    this.removeNoteEvent = eventBusService.on('note-to-mail', (note) => this.getNote(note))
  }

 getNote=(note)=>{
  const newNote=note
  this.setState({note: newNote})
 }

 componentWillUnmount(){
  this.removeNoteEvent()
 }

  render() {
    const {selectedMail} =this.state
    return (
      <main className="email-app">
        <EmailPreview getNote={this.getNote}/>
      </main>
    )
  }
}
