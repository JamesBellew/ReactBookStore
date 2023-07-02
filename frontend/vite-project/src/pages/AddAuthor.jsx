import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddAuthor = () =>{
  const navigate = useNavigate();
  const [author, setAuthor] = useState({
    AuthorName: "",
    AuthorDesc: "",
    AuthorAge: null,
    NumberBooks: 1,
  });

  const handleChange = (e) => {
    setAuthor((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(author)
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/authors", author);
      console.log('made it to axios here baiii');
      navigate("/authors?book_added");
      localStorage.setItem("message", "Author Added");
      location.reload();
    } catch (err) {
      console.log(err);
      setError(true)
      
    }

  };
    return (
        <>
    
<form className="bg-slate-800 p-10 m-10 rounded-lg mt-10">
  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Author Name
    </label>
    <input  onChange={handleChange} type="email" id="email" name="AuthorName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Joe Blogs" required /> 
  </div>
  <div class="mb-6">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Author Age
    </label>
    <input onChange={handleChange} type="number" id="email" name="AuthorAge" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%]  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required /> 
  </div>
  <div class="mb-6">
  <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Author Description</label>
    <input onChange={handleChange} type="text" name="AuthorDesc" id="large-input" className="block w-full p-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder="Author Description"/>
  </div>
  <div class="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input onChange={handleChange} id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
    </div>
    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" onClick={handleClick} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

        </>
    )
}

export default AddAuthor