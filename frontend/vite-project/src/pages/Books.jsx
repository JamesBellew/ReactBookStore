import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../App.css';
import { FaBeer } from 'react-icons/fa';
import { FaArrowAltCircleDown } from 'react-icons/fa';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import NavBar from "./NavBar";

const Books = () => {
  const [books, setBooks] = useState([]);
const [bookStatus, setBtnText] = useState(false);

const BookBtnClick = ()=>{
  // if(!bookBtnText){
  //   setBtnText(true);
  // }else{
  //   setBtnText('Show Books');
  // }
  setBtnText(!bookStatus);


}

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(books);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <NavBar/>
         <br></br>
         <br></br>
      <h1 className=" text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> <button className="addHome bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button></h1>
      <br>
      </br>
      <div className="ml-10">
        <button onClick={BookBtnClick} className={"bookBtn addHome hover:bg-blue-700 text-white font-bold py-2 m-4 px-4 rounded-full text-center self-center" } style={{
          backgroundColor: bookStatus ?'lightblue':'#1D4ED8',color:bookStatus ?'black':'white',}} >
          {bookStatus ? 'Hide Books ': 'Show Books' }
          </button>
      </div>
   
  <br></br>
  <br></br>
      <div className="books mx-auto justify-center   inline self-center m-2">
       
<h1 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 mb-5 dark:text-white"> {bookStatus ?'Here are our current books': ''}</h1>
        {
        
      bookStatus ?   books.map((book) => (
          
          <div key={book.id} className="book" class='cursor-pointer hover:scale-95 transition-transform duration-300 inline-block md:w-[50%] sm:w-[100%]  max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 m-1 dark:border-gray-700 dark:hover:bg-gray-700'>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <img src="https://picsum.photos/200/300?random=" className="rounded mx-auto "></img>
            <h2 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{book.title}</h2>
            <p class='font-normal text-gray-700 dark:text-gray-400'>{book.desc}</p>
            <span className="text-3xl  font-bold text-gray-900 dark:text-white">${book.price}</span> <br></br> <br></br>
            <button className="delete bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-2 text-center px-4 rounded-full" onClick={() => handleDelete(book.id)}>Delete</button>
            <button className="update bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <Link
                to={`/update/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
          </div>
        )): ''}
      </div>

  
    </div>
  );
};

export default Books;