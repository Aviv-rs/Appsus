import { emailService } from "../services/email.service.js"

export class EmailDetails extends React.Component {
    state={
        mail:null,
    }

    componentDidMount=()=>{
        this.loadMail(this.props.match.params.mailId)
    }
    
    loadMail=(mailId)=>{
        emailService.getById(mailId).then(mail=>{
            if (!mail) this.props.history.push('/')
            console.log(mail)
            this.setState({mail})
        })
    }

    onGoBack = () => {
        this.props.history.push('/mail')
    }
    
    render() {
    const {mail} = this.state
      return (
        <main className="email-details">
            {mail &&
            <React.Fragment>
            <h1>{mail.subject} </h1>
            <span>{mail.sentAt}</span>
            <hr />
            <h3>from: {mail.from}</h3>
            <h4>{mail.body}</h4>
            <hr />
            </React.Fragment>}
          <h4 onClick={this.onGoBack}>←Return</h4>
        </main>
      )
    }
  }