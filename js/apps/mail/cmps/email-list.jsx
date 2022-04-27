import { emailService } from "../services/email.service.js"
const { Link } = ReactRouterDOM

export class EmailList extends React.Component {

    state = {
        mails: [],

    }

    componentDidMount = () => {
        this.loadMails()
    }

    addListeners=()=>{
        addEventListener('mouseleave', ()=>{console.log('leave!')})
        addEventListener('mouseenter', ()=>{console.log('enter!')})
    }
    
    
    loadMails = () => {
        emailService.query().then(mails => {
            this.setState({ mails })
        })
        
    }
    
    shortMailBody = (body) => {
        return body.slice(1, 50)
    }
    
    componentWillUnmount=()=>{
        removeEventListener('mouseleave', ()=>{console.log('over!')})
        removeEventListener('mouseenter', ()=>{console.log('enter!')})        
    }


    render() {
        let { mails } = this.state
        let mailReadColor;
        let mailHoverSymbols;
        return (
            <main className="email-list">
                {mails &&
                    // this.addListeners
                    <ul className="email-preview flex">{mails.map(mail => {
                        {
                            mailReadColor = (mail.isRead) ? 'read' : ''
                        }
                        return <Link className={`link-to-details ${mailReadColor}`} 
                        to={`/mail/${mail.id}`} key={mail.id}> 
                        <li onMouseEnter={()=>mailHoverSymbols=(mail.sentAt)} 
                        onMouseLeave={()=>mailHoverSymbols=''} 
                        className="email-line flex"
                        ><span className="mail-subject">{mail.subject}</span>
                            <span className="mail-body">{this.shortMailBody(mail.body)}...</span>
                            <span className="mail-date">{mailHoverSymbols}</span></li></Link>
                    })}</ul>
                }
            </main>
        )
    }
}
