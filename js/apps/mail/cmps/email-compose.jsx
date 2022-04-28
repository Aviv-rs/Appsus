import { emailService } from "../services/email.service.js"

export class EmailCompose extends React.Component {
    state={
        message:{
            to:'',
            subject:'',
            textarea:'',
        },
        
    }

    handleChange = ({ target }) => {
        const value =  target.value
        const field = target.name
        this.setState((prevState) => ({ message: { ...prevState.message, [field]: value } }), () => {
        })
    }


    onCloseModal=()=>{
        this.props.onToggleCompose()
    }

    onSendMail=(ev)=>{
        const {to,subject,textarea} = this.state.message
        ev.preventDefault()
        emailService.sendMail(to,subject,textarea).then(()=>{
          this.onCloseModal()
        })
    }

    render() {
      return (
        <div className="email-compose">
      <h4 className="compose-header flex">New Message <span onClick={this.onCloseModal}>X</span></h4>
        <form onSubmit={this.onSendMail}>
        <input name="to" type="text" className="compose-input" placeholder="To" onChange={this.handleChange}/>
        <hr />
        <input name="subject" type="text" className="compose-input" placeholder="Subject" onChange={this.handleChange}/>
        <hr />
        <textarea name="textarea" className="compose-text-area" onChange={this.handleChange} id="" cols="30" rows="10"></textarea>
        <button className="send-btn">Send</button>
        </form>
        </div>
      )
    }
  }