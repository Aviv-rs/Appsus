import { emailService } from "../services/email.service.js"
import { EmailCompose } from "./email-compose.jsx"
const { Link } = ReactRouterDOM

export class EmailList extends React.Component {

    state = {
        mails: [],
        unReadCount: 0, 
        compose: false
    }

    componentDidMount = () => {
        this.loadMails()
    }
    loadMails = () => {
        emailService.query().then(mails => {
            this.setState({ mails })
            mails.forEach(mail => {
                if (mail.isRead === false) {
                    this.setState({ unReadCount: this.state.unReadCount + 1 })
                }
            });
        })

    }

    onMarkUnread = (ev, mailId) => {
        ev.preventDefault()
        emailService.markAsUnread(mailId).then(() => this.loadMails())
    }

    onDeleteMail = (ev, mailId) => {
        ev.preventDefault()
        emailService.removeMail(mailId).then(() => this.loadMails())
    }

    onToggleCompose=()=>{
        this.setState({compose: !this.state.compose})
    }


    onShortMailBody = (body) => {
        return body.slice(1, 50)
    }



    render() {
        let { mails, unReadCount,compose} = this.state
        let mailReadColor;
        return (
            <main className="email-list">
                {unReadCount &&
                    <span>{unReadCount} unread emails</span>
                }
                <button onClick={this.onToggleCompose} className="compose-btn">+ compose</button>
                {mails &&
                    <ul className="email-preview flex">{mails.map(mail => {
                        {
                            mailReadColor = (mail.isRead) ? 'read' : ''
                        }
                        return <Link className={`link-to-details ${mailReadColor}`}
                            to={`/mail/${mail.id}`} key={mail.id}>
                            <li
                                className="email-line flex"
                            ><span className="mail-subject">{mail.subject}</span>
                                <span className="mail-body">{this.onShortMailBody(mail.body)}...</span>
                                <span className="mail-date">{mail.sentAt}
                                    <img onClick={(event) => this.onMarkUnread(event, mail.id)} className="mark-unread" src="assets/img/mark-unread.png"></img>
                                    <img onClick={(event) => this.onDeleteMail(event, mail.id)} className="delete-btn" src="assets/img/delete.png"></img>
                                </span></li></Link>
                    })}</ul>
                }
                {compose &&
                <EmailCompose onToggleCompose={this.onToggleCompose}/>
                }
            </main>
        )
    }
}

