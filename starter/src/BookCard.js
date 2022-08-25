import {react} from "react"
import { useState,useEffect } from "react";
import * as BooksAPI from "./BooksAPI";


const BookCard = ({CoverImage,title,authors,bookShelf,bookId,book,AddBookto})=>{
 
  let ShelfState
  if (bookShelf=== "currentlyReading"){ ShelfState = "currentlyReading"

  } else if( bookShelf=== "wantToRead"){ ShelfState = "wantToRead"}
  else if ( bookShelf=== "read"){ ShelfState = "read"}
  else {ShelfState = "none"}

  /*const[BookSelection,SetBookSelection]=useState(ShelfState)

  const handleSelect = (event)=>{
    SetBookSelection(event.value)
    
  }*/


  const handleBookChange = (event)=>{

    
    if(book.shelf!==event.target.value){
      AddBookto(book,event.target.value)
    console.log(book,event.target.value)
  }

  }



 
    return(
      
      

        <div className="book">
                      <div className="book-top">
 
                        <img className="book-cover" src={CoverImage} width="128" height="193"></img>
                        <div className="book-shelf-changer">
                          <select onChange={handleBookChange} value={bookShelf?bookShelf:"none"}>
                            <option  value="none" disabled>Move to...</option>
                            <option  value="currentlyReading">Currently Reading</option>
                            <option  value="wantToRead">Want to Read</option>
                            <option  value="read">Read</option>
                            <option  value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{title}</div>
                      <div className="book-authors">{authors}</div>
                    </div>
    )


};

export default BookCard;