export const GoogleBooks={
    getGoogleBooks,
}

function getGoogleBooks(search){
    const url =`https://www.googleapis.com/books/v1/volumes?printType=books&q=${search}`
    return fetch(url)
    .then(res=> res.json())
    .then(info => info.items)
    .then(googleBooks => googleBooks.map(book=>{
        const {title, subtitle, authors, publishedDate,description, catagories, language, imageLinks, pageCount} = book.volumeInfo
        return {
            title, 
            subtitle, 
            authors, 
            publishedDate,
            description, 
            catagories, 
            language, 
            imageLinks,
            pageCount
        }
    }))

}