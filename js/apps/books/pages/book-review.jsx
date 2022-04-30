import { BookService } from "../services/bookstore.service.js"


export class BookReview extends React.Component{

    state={
        review:{
            name:'',
            rate:4,
            text:'',
            readAt: Date.now()
        },
        bookId:''
    }

    componentDidMount=()=>{
        let {bookId} = this.props.match.params
        this.setState({bookId})
    }
    
    onHandleChange=({target})=>{
        const field = target.name
        const value = target.type === 'range' ? +target.value : target.value
        this.setState((prevState)=>({review: {...prevState.review, [field]: value}}))
    }
    
    onSaveReview=(ev)=>{
        ev.preventDefault()
        if (!this.state.review.name || !this.state.review.text){
            return alert('All fields must be filled!')
        } 
        BookService.addReview(this.state.bookId, this.state.review)
        .then(book=> this.props.history.push(`/books/${book.id}`))
    }
    
    render(){
        const{name,rate,text} = this.state.review
        return <form className="book-review" onSubmit={this.onSaveReview}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" placeholder="Full Name"
             onChange={this.onHandleChange} value={name}/>

            <label htmlFor="rate">Rate</label>
            <input type="range" id="rate" name="rate" min="0" max="5" 
            onChange={this.onHandleChange} value={rate}/>

            <label htmlFor="text">Tell us more</label>
            <textarea id="text" name="text" placeholder="Your Review Here" 
            onChange={this.onHandleChange} value={text}/>
            <button>Save Review</button>
        </form>
    }

}