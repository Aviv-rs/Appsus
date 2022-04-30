
import { BookService } from '../books/services/bookstore.service.js'


import { BookList } from './cmps/book-list.jsx'
import { BookFilter } from './cmps/book-filter.jsx'
import { BookAdd } from './pages/book-add.jsx'

const { Link } = ReactRouterDOM

export class BookApp extends React.Component {

    state = {
        books: [],
        selectedBook: null,
        filterBy: null,
    }

    componentDidMount() {
        this.loadBooks()
    }

    loadBooks = () => {
        
        BookService.query(this.state.filterBy)
            .then(books => {
                this.setState({ books })
            })
    }


    onSetFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadBooks)
    }

    render() {
        const { books, selectedBook } = this.state
        if (!books) return <h3>Loading</h3>
        return (
            <section>
                <BookAdd />
                <BookFilter onSetFilter={this.onSetFilter} />
                <BookList books={books} />
                {selectedBook && <BookDetails />}
            </section>
        )
    }
}