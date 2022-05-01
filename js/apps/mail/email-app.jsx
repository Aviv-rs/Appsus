import { EmailPreview } from './cmps/email-preview.jsx'

export class EmailApp extends React.Component {
  state = {
      noteId: null,
      noteInfoTxt: null,
      noteInfoUrl: null,
  }
  

  componentDidMount(){
    const urlSrcPrm = new URLSearchParams(this.props.location.search)
  
    const noteId = urlSrcPrm.get('noteId')
    const noteInfoTxt = urlSrcPrm.get('noteInfoTxt')
    const noteInfoUrl = urlSrcPrm.get('noteInfoUrl')
    if (noteId) {
      this.setState({noteId: noteId, noteInfoTxt: noteInfoTxt,noteInfoUrl: noteInfoUrl})
    }
    
  }
  

  

  render() {
    const { noteId, noteInfoTxt,noteInfoUrl } = this.state
    return (
      <main className="email-app">
        <EmailPreview noteId={noteId} noteInfoTxt={noteInfoTxt} noteInfoUrl={noteInfoUrl}/>
      </main>
    )
  }
}
