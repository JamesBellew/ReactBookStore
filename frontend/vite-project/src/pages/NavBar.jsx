import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () =>{

  const [currentPage,updatePage] = useState('/');

  const navClickHandler=(page)=>{
    updatePage(page);
    console.log(page);
  }
return(
    <>
 <header>
     <nav
        className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-gray-700 
        "
      >
       <div>
          <a href="#" className="text-gray-100">
     Book Store
          </a>
        </div>
       
         <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
       
       <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
          >
            <li>
                <Link to="/authors">
              <a   onClick={() => navClickHandler('Authors')} className={
                currentPage == 'Authors' ?  "backdrop-blur-sm bg-white/10  md:p-4 py-1 block text-cyan-400 rounded  hover:text-purple-400" : "md:p-4 py-2 block text-gray-200 hover:text-purple-400"
              
              
              }  href="#"
                >Authors</a
              >
              </Link>
            </li>
            <li>
            <Link to="/books">
              <a onClick={() => navClickHandler('/')} className={
                currentPage == '/'  ?  "backdrop-blur-sm bg-white/10  md:p-4 py-1 block text-cyan-400 rounded  hover:text-purple-400" : "md:p-4 py-2 block text-gray-200 hover:text-purple-400"
              
              
              } href="#"
                >Books</a
              >
              </Link>
            </li>
            <li>
            <Link to="/add">
              <a className="md:p-4 py-2 block text-gray-200 hover:text-purple-400" href="#"
                >Add Book</a
              >
              </Link>
            </li>
            <li>
              <a className="md:p-4 py-2 block text-gray-200 hover:text-purple-400" href="#"
                >Blog</a
              >
            </li>
            {/* <li>
              <a
                className="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
                href="#"
                >Sign Up</a
              >
            </li> */}
          </ul>
        </div>
    </nav>
  </header>
  
  
    </>
)

}

export default Navbar;