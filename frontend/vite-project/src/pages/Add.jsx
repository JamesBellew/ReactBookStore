import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./NavBar";

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: null,
    cover: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/books", book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
 
    <div className="form  h-[100vh] ">
         <Navbar/>
      <br></br>
      <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add New Book</h1>
      <br></br>
      {/* <input
        type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange}
      /> */}
          <input type="text"
        placeholder="Book title"
        name="title"
        onChange={handleChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
      {/* <textarea
        rows={5}
        type="text"
        placeholder="Book desc"
        name="desc"
        onChange={handleChange}
      /> */}
      <br></br>
      <input     type="text"
      
        name="desc"
        onChange={handleChange} 
        placeholder='description text' class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        <br></br>
      <input
        type="number"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Book price"
        name="price"
        onChange={handleChange}
      />
      <br></br>
      <input
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        placeholder="Book cover"
        name="cover"
        onChange={handleChange}
      />
      <br></br>
      <div className="mx-auto text-center p-4">
      <button className="bg-blue-500 mx-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={handleClick}>Add</button>
      {error && "Something went wrong!"}
    <button className="bg-slate-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">  <Link to="/">See all books</Link></button>
    </div>
    </div>
  );
};

export default Add;