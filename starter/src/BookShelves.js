import {react} from "react"
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import { getAll } from "./BooksAPI";
import {useEffect} from "react"
import BookShelf from "./BookShelf";


const BookShelves = ({openSearch,AddBookto,Books})=>{


  const ShelfList =(shelfName)=> Books.filter((book)=>book.shelf===shelfName)
  

    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <BookShelf AddBookto={AddBookto} ShelfTitle="Currently Reading" BooksList={ShelfList("currentlyReading")}/>
        <BookShelf AddBookto={AddBookto} ShelfTitle="Want to Read" BooksList={ShelfList("wantToRead")}/>
        <BookShelf AddBookto={AddBookto} ShelfTitle="read" BooksList={ShelfList("read")}/>
        <Link className="open-search" to="/search" onClick={openSearch} >Add a book</Link>
      </div>

    )
};

export default BookShelves;
