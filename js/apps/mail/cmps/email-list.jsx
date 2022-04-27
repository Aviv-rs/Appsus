import { emailService } from "../services/email.service.js"

export class EmailList extends React.Component {
    
    state={
        mails:[],

    }

    componentDidMount=()=>{
        this.loadMails()
        console.log('hello')
    }
    
    loadMails=()=>{
        emailService.query().then(mails =>{
            this.setState({mails})
        })
        
    }

    shortMailBody=(body)=>{
        return body.slice(1,50)
    }
    
    render() {
        let {mails} = this.state
      return (
        <main className="email-list">
          {mails && 
          <ul className="email-preview">{mails.map(mail=>{
             return <li className="email-line" key={mail.id}><span className="mail-subject">{mail.subject}</span><span className="mail-body">{this.shortMailBody(mail.body)}...</span><span className="mail-date">{mail.sentAt}</span></li>
          })}</ul>
          }
        </main>
      )
    }
  }
