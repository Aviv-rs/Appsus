import { eventBusService } from "../../../services/event-bus-service.js"

export class EmailFilter extends React.Component {
  
  state={
    filter:''
  }
  
  onHandleChange=({target})=>{
    this.setState({filter: target.value})
    eventBusService.emit('filter-submit',target.value)
  }
  
  render() {
      return (
        <main className="email-filter">
          <input onChange={this.onHandleChange} className="filter-input" type="text" placeholder=" 🔍︎  Search mail" />
        </main>
      )
    }
  }