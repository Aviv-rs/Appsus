import { EmailPreview } from './cmps/email-preview.jsx'

export class EmailApp extends React.Component {
  
  render() {
    
    return (
      <main className="email-app">
        <EmailPreview/>
      </main>
    )
  }
}
