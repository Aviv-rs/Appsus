export class EmailCompose extends React.Component {
    state={
        message:{
            to:'',
            subject:'',
            textarea:'',
        },
        isModalOpen: true 
    }

    onCloseModal=()=>{
        this.setState({isModalOpen: false})
    }

    onSendMail=(ev)=>{
        ev.preventDefault()
    }

    render() {
        const {isModalOpen} = this.state 
        let hidden = (isModalOpen)? '':'hidden'
      return (
        <div className={"email-compose "+hidden}>
      <h4 className="compose-header flex">New Message <span onClick={this.onCloseModal}>X</span></h4>
        <form onSubmit={this.onSendMail}>
        <input type="text" className="compose-input" placeholder="To"/>
        <hr />
        <input type="text" className="compose-input" placeholder="Subject"/>
        <hr />
        <textarea className="compose-text-area" name="" id="" cols="30" rows="10"></textarea>
        <button className="send-btn">Send</button>
        </form>
        </div>
      )
    }
  }