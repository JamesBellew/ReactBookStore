import { Link, useLocation,useNavigate } from "react-router-dom";
import Navbar from "./NavBar";
import axios from "axios";

import React from "react";
import { useState } from "react";



const DeleteAuthor =(props)=>{
  const [error,setError] = useState(false)
    const location = useLocation();
    const propsData = location.state;
    console.log(propsData);
    const navigate = useNavigate();

const id = propsData.id;


    const handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:8800/authors/${id}`);
        navigate("/authors", {state: propsData.AuthorName});
      } catch (err) {
        console.log(err);
      }
    };

    return (
        <>
        <Navbar/>
        <h1 className="text-white text-2xl text-center mt-20">Delete author {propsData.AuthorName}
        <br></br>     <br></br>
        ID : {propsData.id}
        </h1>
        <div className=" text-center mt-10">
        <Link to="/authors">
        <button id="AddBtn" className="mt-1 mx-auto text-center self-center bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
                  Back</button></Link>


        <button onClick={()=>handleDelete(id)} id="AddBtn" className="mt-1 mx-2  mx-1 text-center self-center bg-indigo-700 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
                  Confirm Deletion</button> 
                 
                 
             
        </div>
  
        </>
    )
}

export default DeleteAuthor;