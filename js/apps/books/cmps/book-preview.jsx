import { utilService } from "../../../services/util.service.js"

const { Link } = ReactRouterDOM


export function BookPreview({book, title, price, curr, img}){
    let coin = utilService.getCurr(curr)

    return  <article className="book-preview">
        <h3>{title}</h3>
         <Link to={`/books/${book.id}`}>
        <img className="book-image" src={img} alt="" />   
    </Link>
        {coin !== '$' && <p>{price+coin}</p>}
        {coin === '$' && <p>{coin+price}</p>}
    </article>
}