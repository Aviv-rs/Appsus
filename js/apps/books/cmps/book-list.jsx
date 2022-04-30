import { BookPreview } from './book-preview.jsx'


export function BookList({books}){
   return <section className="book-list">
       {books.map(book =>
        <BookPreview book = {book}
        title={book.title} 
        key={book.id} 
        img={book.thumbnail} 
        price={book.listPrice.amount} 
        curr={book.listPrice.currencyCode}/>
        )}
    </section>
}
