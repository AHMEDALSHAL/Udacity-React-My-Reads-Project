import {react} from "react"
import BookCard from "./BookCard";
import * as BooksAPI from "./BooksAPI";


const BookShelf = ({BooksList,ShelfTitle,AddBookto})=>{


    return (

    <div className="bookshelf">
        <h2 className="bookshelf-title">{ShelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {BooksList.map(book=>(
                <BookCard
                key={book.id}
                title={book.title}
                authors={book.authors}
                CoverImage={book.imageLinks.smallThumbnail}
                bookShelf={book.shelf}
                bookId={book.id}
                book={{book}}
                AddBookto={AddBookto}

                />
            ))}                                

          </ol>
        </div>
      </div>

    )
};

export default BookShelf;
