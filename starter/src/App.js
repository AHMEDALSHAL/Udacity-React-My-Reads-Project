import "./App.css";
import { useState } from "react";
import {Routes,Route,useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
import SearchComponent from "./SearchComponent";
import BookShelves from "./BookShelves"
import {useEffect} from "react"
import * as BooksAPI from "./BooksAPI";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  let navigate = useNavigate()

const [AllBooks,setAllBooks]= useState([]);
/*const [SearchedBooks,setSearchedBooks]= useState([]);*/


let getBooks


useEffect(()=>{
  getBooks = async () => {
    const res = await BooksAPI.getAll();
    setAllBooks(res)
  };
  getBooks();
},[])

const AddBookto = async (book,Bookshelf)=>{
  await BooksAPI.update(book.book,Bookshelf)
  const res = await BooksAPI.getAll()
  setAllBooks(res)
  
  };





  return (
    <div className="app">
      <Routes>
      {showSearchPage ? (
        
          <Route path = "/search" element={
            <SearchComponent  AddBookto={AddBookto} AllBooks={AllBooks} returnButton={() => setShowSearchpage(navigate("/"))}/>
          }
          
          />
         
      ) : (
        <Route exact path="/" element={
          <BookShelves AddBookto={AddBookto}  Books={AllBooks} openSearch={() => setShowSearchpage(!showSearchPage)}/>

        }/>

      )}
    </Routes>
    </div>
  );
}

export default App;
