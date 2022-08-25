import {react} from "react"
import { useState,useEffect } from "react";
import { get, getAll, search } from "./BooksAPI";
import * as BooksAPI from "./BooksAPI"
import BookCard from "./BookCard";


const SearchComponent = ({Search,returnButton,AddBookto,AllBooks})=>{

    const [SearchInput,SetSearchInput] = useState("")
    const [SearchedBooks,setSearchedBooks]= useState([])





    const InputHandle = (event)=>{
      SetSearchInput(event.target.value)
      console.log(SearchInput)

  }




   useEffect(()=>{
    let unMounted = true
    if(SearchInput) {

    BooksAPI.search(SearchInput).then(res => {
      if(!res.error){
        if(unMounted){
          res.map(SearchRes=>{
            AllBooks.forEach(Book => {
              if(SearchRes.id === Book.id){
                SearchRes.shelf = Book.shelf
              }
            });
          })
        setSearchedBooks(res)
        }
      }
    })}

    return ()=>{
      unMounted = false
      setSearchedBooks([])

    }



    
      
},[SearchInput])



   console.log(SearchedBooks)
   
   const Results =  SearchedBooks.map(book=>(

    <BookCard
    key={book.id}
    title={book.title}
    authors={book.authors && book.authors}
    
    CoverImage={book.imageLinks.thumbnail}
    bookShelf={book.shelf}
    bookId={book.id}
    book={{book}}
    AddBookto={AddBookto}
  
    />
  ))
   
           
    return (

        <div className="search-books">
            <div className="search-books-bar">
              <a
                className="close-search"
          onClick={returnButton}
              >
                Close
              </a>
              <div className="search-books-input-wrapper">
                <input
                  type="text"
                  placeholder="Search by title, author, or ISBN"
                  onChange={InputHandle}
                  value ={SearchInput}
                  
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
              {Results}
            </div>
          </div>

    )
};




export default SearchComponent;