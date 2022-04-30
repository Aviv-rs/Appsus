import {GoogleBooks} from '../services/google.books.service.js'
import {BookService} from '../services/bookstore.service.js'


export class BookAdd extends React.Component{

    state={
        searchInput:'',
        bookArr: []
    }
    getApi=(search)=>{
        let apiSample = GoogleBooks.getGoogleBooks(search)
        .then(books => {
            this.setState({bookArr: books})
            // console.log(this.state.bookArr)
        })
    }

    onChooseBook=({target})=>{
        let chosenBook = this.state.bookArr.find(book=> book.title === target.value)
        BookService.addGoogleBook(chosenBook)
        console.log(chosenBook)
    }

    onHandleChange=({target})=>{
        this.setState({searchInput: target.value}, this.getApi(target.value))
    }

    // checkMathces=(search, bookName)=>{

        // let matchingBooks=this.state
        // if (bookName.toLowerCase().includes(search.toLowerCase())&& search){
            // this.setState((prevState)=>{matchingBooks: matchingBooks.push(bookName)})
            // console.log(bookName + ' has an ' + search)
        // }
    // }
    
    render(){
       let {bookArr} = this.state
       let {searchInput} = this.state
       return <div className="book-add">
       {/* <label htmlFor="book-add">Add a Book</label> */}
       <input type="text" id="book-add" name="book-add" 
       placeholder="🔍︎ Search for a Book"
        onChange={this.onHandleChange} value={searchInput}/>
        {searchInput && <ul>
        {bookArr.map(book =>{
         return <React.Fragment key={book.title}>
              <li  className='book-search'>{book.title} <button value={book.title} onClick={this.onChooseBook}>+</button></li>
        </React.Fragment>}
        )}
        </ul>}
        </div>
    }
}
