import {EmailPreview} from "./cmps/email-preview.jsx"

export class EmailApp extends React.Component {
  state={
    selectedMail:null,
    filterBy: null,
  }

  render() {
    const {selectedMail} =this.state
    return (
      <main className="email-app">
        <EmailPreview/>
      </main>
    )
  }
}
