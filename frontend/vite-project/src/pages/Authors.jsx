import React from "react";

import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../App.css';
import Navbar from "./NavBar";
import { FaExpand } from 'react-icons/fa';
import AddAuthor from "./AddAuthor";
import { useLocation } from "react-router-dom";
import EditAuthorAuthenticate from "./EditAuthorAuthenticate";


const Authors =()=>{
  const location = useLocation();
  const [deleteMsg,updateDeleteMsg] = useState( location.state);

const [userIsAuthenticated,updateUserAuthentication] = useState(false);
  const pull_data = (data) => {
    console.log(data); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    console.log('hai'); // LOGS DATA FROM CHILD (My name is Dean Winchester... &)
    if(data =='close'){

      SetEditAuthor(false);
    }
    if(data == true){
      
      SetEditAuthor(false);
  // alert('user is authenticated')
      updateUserAuthentication(true);
      document.getElementById('EditBtn').innerHTML = 'Logout';
      document.getElementById('EditBtn').style = 'background:#5b21b6;color:white';
     
    }
  }

    const [authors, setAuthors] = useState([]);
    const [modolStatus, setModal] = useState(false);
    const [authorModal, updateModalAuthor] = useState({});
const [modalAuthor,setModalAuthor] = useState({});
const [AddAuthorShow,SetAddAuthor] = useState(false);
const [EditAuthorShow,SetEditAuthor] = useState(false);
const ClearMsg = () =>{
  console.log('click rmv msg')
  updateMessage(localStorage.removeItem('message'));
}
const ClearDeleteMsg = () =>{
  updateDeleteMsg(null)
}
const EditBtnHandler = () =>{

   if(userIsAuthenticated){
SetEditAuthor(false);
updateUserAuthentication(false);
document.getElementById('EditBtn').innerHTML = 'Edit';
document.getElementById('EditBtn').style = 'background:gray;color:white';
   }else{
    SetEditAuthor(true)
   }

}
const [msg,updateMessage] = useState(localStorage.getItem("message"));
const AddFormClickHandler= ()=>{
  SetAddAuthor(!AddAuthorShow);
  if(!AddAuthorShow){
    document.getElementById('AddBtn').innerHTML = 'Cancel Form'
    document.getElementById('AddBtn').style = 'background:#5b21b6;'
  }else{
    document.getElementById('AddBtn').innerHTML = 'Add New Author'
    document.getElementById('AddBtn').style = 'background:  #1d4ed8;'
  }

}
    const modalClickHandler = (author) =>{
        setModal(!modolStatus);
        setModalAuthor(author)
// console.log('clicked');
    }
    useEffect(() => {
        const fetchAllAuthors = async () => {
          try {
            const res = await axios.get("http://localhost:8800/authors");
            setAuthors(res.data);
            // console.log(res.data)
          } catch (err) {
            console.log(err);
          }
        };
        fetchAllAuthors();
      }, []);
return (
    <>
<Navbar/>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<h1 className="h-2 mx-auto text-2xl text-white text-center mb-10">
          Our Signed Authors
        </h1>
        {deleteMsg &&
        <>  <h1 className="text-indigo-500 text-center text-3xl  rounded-xl bg-slate-50/10 w-auto m-20 p-10">{deleteMsg} 
        <span className="text-white "> deleted</span>
        <button onClick={ClearDeleteMsg} id="AddBtn" className="  mx-auto text-center self-center bg-indigo-800 text-lg ml-5 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">Close</button></h1>
               
        </>}
        {msg && 
        <div className="rounded-xl bg-slate-800 w-[30%] ml-10 text-center p-10 mx-auto self-center">
        
        <h1 className=" text-white text-2xl ">{msg}
        
        </h1>
        <button onClick={ClearMsg} id="AddBtn" className="mt-2  mx-auto text-center self-center bg-indigo-800 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">Close</button>
        </div>}
<button onClick={AddFormClickHandler} id="AddBtn" className="mt-4 ml-10 mx-auto text-center self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">Add New Author</button>
<button onClick={EditBtnHandler} id="EditBtn" className="mt-4 ml-10 mx-auto text-center self-center bg-gray-700 hover:bg-blue-700 text-gray-100 font-bold py-2 px-3 rounded">Edit</button>

{EditAuthorShow && <EditAuthorAuthenticate func={pull_data}/>}
{AddAuthorShow && <AddAuthor/> }
{ modolStatus &&
<>
<div className="outside-modal absolute backdrop-blur-sm bg-white/10 z-10 cursor-pointer h-screen w-screen top-0 flex" onClick={modalClickHandler}>
</div>
    <div className=" flex modal z-20 backdrop-blur-sm  rounded-lg   duration-200 absolute  my-auto
    h-[auto] w-[80%] left-[10%]
    lg:h-[auto]  lg:w-[40%] lg:top-[15%] lg:left-[30%]
     bg-slate-50">


<div className="close absolute top-10 right-10 cursor-pointer text-3xl font-bold hover:scale-75 transition-all " onClick={modalClickHandler}><FaExpand /></div>
      {/* Modal content */}
      <div className="mx-auto text-center self-center">
   
      <h1 className=" p-10 ">
      <div  className="w-20 mx-auto h-20  rounded-full bg-indigo-300 text-center align-middle flex cursor-pointer hover:scale-95 duration-500">
                  <div className="my-auto mx-auto"> 
                  
                  <h1>{modalAuthor.AuthorName.split(" ").map((n)=>n[0]).join(" ")}</h1>
                  
                  </div>
                 
                  {/* <img src="https://picsum.photos/200/300" className="w-full h-full rounded-3xl" alt="" /> */}
                  
                  </div>

        {modalAuthor.AuthorName}
      </h1>
      <h2>{modalAuthor.AuthorAge}</h2>
      <p>{modalAuthor.AuthorDesc}</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      </div>
    </div>
    </>
   
}


<section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto ">
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
    { authors.map((author) =>


 <div className="w-full bg-white/10 p-5 rounded  ">
                <div onClick={()=>modalClickHandler(author)} className="w-20 mx-auto h-20  rounded-full bg-indigo-300 text-center align-middle flex cursor-pointer hover:scale-95 duration-500">
                  <div className="my-auto mx-auto"> 
                  
                  <h1>{author.AuthorName.split(" ").map((n)=>n[0]).join(" ")}</h1>
                  
                  </div>
                 
                  {/* <img src="https://picsum.photos/200/300" className="w-full h-full rounded-3xl" alt="" /> */}
                  
                  </div>
                <div className="text-center"> 
                <h1 className=" h-2 mt-4 rounded-lg  text-white">{author.AuthorName}</h1>
                <p className=" h-2 mt-4 rounded-lg  text-gray-400">{author.AuthorAge}</p>
                </div>
                <br></br>
                <div className="mx-auto text-center">
                <button 
                
                // onClick={modalClickHandler} 
                onClick={() => modalClickHandler(author)}
                value={author.authorDesc} className="mt-4 mx-auto text-center self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">About Author</button>
                <br></br>

{userIsAuthenticated &&
<>
<Link to="/delete" state={author}>
                <button  id="AddBtn" className="mt-1 mx-2  mx-1 text-center self-center bg-indigo-700 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
                  Delete</button> 
                  </Link>
                  <Link to="/delete">
                  <button id="AddBtn" className="mt-1 mx-auto text-center self-center bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded">
                  Update</button>
                  </Link>
                  </>
}

                    </div> 
              
            </div>


)}





    </div>
    </div>
    </section>


    {/* <div className="grid grid-cols-4 gap-4 place-items-center ">
  { authors.map((author) =>
<div className="  bg-gray-800 rounded p-2">
    <h1 className="text-3xl text-white text-center mb-5">    {author.AuthorName}</h1>
    <p className=" text-gray-400 m-5">    {author.AuthorDesc}</p>
    </div>
)}
</div> */}


    </>
)
}



export default Authors;