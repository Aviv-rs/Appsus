import { emailService } from "../services/email.service.js"
const { Link } = ReactRouterDOM


export class EmailCompose extends React.Component {
  state = {
    message: {
      to: '',
      subject: '',
      textarea: '',
    },

  }
  componentDidMount() {
    if (this.props.type) {
      switch (this.props.type) {
        case 'note-txt':
          this.setState((prevState) => ({ message: { ...prevState.message, textarea: this.props.txt } }))
          break
        case 'note-todos':
          this.setState((prevState) => ({ message: { ...prevState.message, subject: 'Check this list!', textarea: this.props.txt } }))
          break
        case 'note-video':
          this.setState((prevState) => ({ message: { ...prevState.message, subject: 'Check this video!', textarea: this.props.url } }))
          break
        case 'note-img':
          this.setState((prevState) => ({ message: { ...prevState.message, subject: 'Check this image!', textarea: this.props.url } }))
          break
      }
    }
  }

  handleChange = ({ target }) => {
    const value = target.value
    const field = target.name
    this.setState((prevState) => ({ message: { ...prevState.message, [field]: value } }), () => {
    })
  }


  onCloseModal = () => {
    this.props.onToggleCompose()
  }

  onSendMail = (ev) => {
    const { to, subject, textarea } = this.state.message
    ev.preventDefault()
    if (!to) alert('Please add a send email')
    emailService.sendMail(to, subject, textarea).then(() => {
      this.onCloseModal()
    })
  }

  composeNote = () => {
    const note = this.props.onComposeNote()
    console.log(note)
  }

  render() {
    const { subject, textarea } = this.state.message
    let valueSubject=''
    let valueBody=''
    if (this.props.type){
      valueSubject=subject
      valueBody=textarea
    }
    return (
      <div className="email-compose">
        <h4 className="compose-header flex">New Message <span onClick={this.onCloseModal}>X</span></h4>
        <form onSubmit={this.onSendMail}>
          <input name="to" type="email" className="compose-input" placeholder="To" onChange={this.handleChange} />
          <hr />
          <input value={valueSubject} name="subject" type="text" className="compose-input" placeholder="Subject" onChange={this.handleChange} />
          <hr />
          <textarea value={valueBody} name="textarea" className="compose-text-area" onChange={this.handleChange} id="" cols="30" rows="10"></textarea>
          <button onClick={this.onCloseModal} className="send-btn">Send</button>
        </form>
      </div>
    )
  }
}