import { EmailPreview } from './cmps/email-preview.jsx'
import { eventBusService } from '../../services/event-bus-service.js'

export class EmailApp extends React.Component {
  state = {
    selectedMail: null,
    filterBy: null,
    note: null,
  }

  

  render() {
    const { selectedMail } = this.state
    return (
      <main className="email-app">
        <EmailPreview/>
      </main>
    )
  }
}
