import { emailService } from "../services/email.service.js"
import { utilService } from "../../../services/util.service.js"
import { eventBusService } from "../../../services/event-bus-service.js"

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
            // console.log(mail)
            this.setState({mail})
        })
    }
    onMakeNote=(mail)=>{
      eventBusService.emit('mail-to-note', (mail))
      console.log(mail)
    }

    onGoBack = () => {
        this.props.history.push('/mail')
    }

    onDeleteMail=(mailId)=>{
      emailService.removeMail(mailId).then(()=>this.onGoBack())
  }
  getDate=(date)=>{
    return utilService.getDateIntl(date)
}
    
    render() {
    const {mail} = this.state
      return (
        <main className="email-details details-page">
            {mail &&
            <React.Fragment>
            <h1>{mail.subject} </h1>
            <span>{this.getDate(mail.sentAt)}</span>
            <hr className="details-hr"/>
            <h3>from: {mail.from}</h3>
            <h4>{mail.body}</h4>
            <hr className="details-hr" />
            </React.Fragment>}
          <h4 onClick={this.onGoBack}>←Return</h4>
          <div className="details-btn" >
          <img onClick={()=>this.onDeleteMail(mail.id)} src="assets/img/delete.png"></img>
          <img onClick={()=>this.onMakeNote(mail)} src="assets/img/mail-icons/mail-to-keep.png"></img>
          </div>
        </main>
      )
    }
  }