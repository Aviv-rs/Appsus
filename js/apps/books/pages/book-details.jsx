import { utilService } from "../services/util.service.js"
import { BookService } from "../services/bookstore.service.js"
import { LongTxt } from '../cmps/long-text.jsx'

const { Link } = ReactRouterDOM

export class BookDetails extends React.Component {
    state = {
        book: null,
    }

    componentDidMount() {
        this.loadBook()
    }

    getLength = () => {
        let length;
        const { book } = this.state
        if (book.pageCount > 500) length = 'Long Reading'
        if (book.pageCount > 200) length = 'Decent Reading'
        if (book.pageCount < 100) length = 'Light Reading'
        return length
    }
    // change name
    
    getBookAge = () => {
        let bookAge;
        const { book } = this.state
        const year = new Date().getFullYear()
        if (year - book.publishedDate > 10) bookAge = 'Veteran Book'
        if (year - book.publishedDate <= 1) bookAge = 'New Book!'
        return bookAge
    }

    getPriceColor = () => {
        let priceColor;
        const { book } = this.state
        if (book.listPrice.amount > 150) priceColor = 'red'
        if (book.listPrice.amount < 20) priceColor = 'green'
        return priceColor
    }

    getCurrSyntax=(coin, price)=>{
        if (coin === '$') return coin+price
        else return price+coin
    }
    // change name to symbol -be precised!
    
    getLang(lang){
        if (lang === 'sp') return 'Spanish'
        if (lang === 'en') return 'English'
        if (lang === 'he') return 'Hebrew'
    }

    loadBook = () => {
        const { bookId } = this.props.match.params
        const book = BookService.getBookById(bookId)
        this.setState({ book })
    }
    

    onGoBack = () => {
        this.props.history.push('/books')
    }
    
    onDeleteReview=({target})=>{
    const { bookId } = this.props.match.params
        BookService.deleteReview(bookId ,target.id)
        .then(this.loadBook)
    }

    getDate=(date)=>{
        console.log(date.getFullYear())
    }

    render() {
        // add divs for order
        const { book } = this.state
        if (!book) return <h4>Loading..</h4>
        let coin = utilService.getCurr(book.listPrice.currencyCode)
        return <section className="book-details">
            <h1>{book.title}</h1>
            <h5>{book.authors}</h5>
            <h5>{book.categories.join(', ')}</h5>
            <img src={book.thumbnail} alt="" />
            <h3> {book.subtitle}</h3>
            {book.listPrice.isOnSale &&
                <img className="sale-img" src="../assets/img/sale.png" alt="" />
            }
            <p className={this.getPriceColor()}>{this.getCurrSyntax(coin,book.listPrice.amount)}</p>
            <p>book language: {this.getLang(book.language)}</p>
            <h5><LongTxt txt={book.description} isLongTxtShown={false} /></h5>
            <h3>{this.getLength()}</h3>
            <h3>{this.getBookAge()}</h3>
            <button onClick={this.onGoBack}>Go Back!</button>
            <Link to={`/books/review/${book.id}`}><button>Add Review</button></Link>
            {book.review &&
                <React.Fragment>
                    <h2>Reviews</h2>
                    {book.review.map(review => {
                        return <React.Fragment key={review.readAt}>
                            <h3>Name: {review.name}</h3>
                            <h3>Rate: {review.rate}</h3>
                            <p>{review.text}</p>
                            <p>Read At{this.getDate(review.readAt)}</p>
                            <button id={review.readAt} onClick={this.onDeleteReview}>Delete Review</button>
                        </React.Fragment>
                    })}
                </React.Fragment>
            }
        </section>
    }

}