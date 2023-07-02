import React from "react";
import { useState } from "react";

const EditAuthorAuthenticate = (props) =>{


const [isAuth,updateAuth] = useState(false);
const password = '123';
const [enteredPwd,updatePwdEntentered] = useState("");
const [errorMsg,updateError] = useState('');
const [PwdAttempts,updatePwdAttemptCount] = useState(0);
const [timeStraint,updateConstraint] = useState(10000);
function pwdEntered(event) {
    const pwd = event.target.value;
    updatePwdEntentered(pwd);
    document.getElementById('PwdInput').style = 'border:1px solid gray;'
    // console.log(updatePwdEntentered);
  }
  const closeModal=()=>{
    props.func('close');
  }
const AuthSignInHandler = (e)=>{
     e.preventDefault;

     if(enteredPwd == password){
        updateAuth(!isAuth);
     }
     else if(enteredPwd.length ==0){
        updateError('Please Enter a Valid Password');
        document.getElementById('PwdInput').style = 'border:1px solid #4338ca;'
     }
     
     else{
        updateError('Incorrect password');
        updatePwdAttemptCount(PwdAttempts+1);
        if(PwdAttempts >3 && PwdAttempts <7){
            updateError('Incorrect password '+ (7 -PwdAttempts  ) +' attempt(s) left');
            document.getElementById('PwdInput').style = 'border:1px solid #4338ca;'
        }else if(PwdAttempts>=7){
            updateError('Edit privileges locked for 10 seconds');
            document.getElementById("PwdSubmit").disabled = true;
            document.getElementById('PwdSubmit').innerHTML = 'Blocked'
            document.getElementById('PwdSubmit').style = 'cursor:auto;opacity:50%;text-decoration: line-through;'
            document.getElementById('PwdInput').style = 'border:1px solid #4338ca;'

            if(PwdAttempts >=10){
                updateConstraint(30000)
                updateError('Edit privileges locked for 30 seconds');
                document.getElementById('PwdInput').style = 'border:1px solid #6d28d9;'
            }

            setTimeout(() => {
                updateError('3 attempts left until full block');
                document.getElementById("PwdSubmit").disabled = false;
                document.getElementById('PwdSubmit').innerHTML = 'Submit'
                document.getElementById('PwdSubmit').style = 'cursor:pointer;opacity:100%;text-decoration: none;'
                document.getElementById('PwdInput').style = 'border:1px solid #9d174d;'
              },timeStraint );
        }
        console.log(PwdAttempts)
     }

    console.log(enteredPwd);
}

    props.func(isAuth);
return (
   <>
   <section  class="bg-gray-50 dark:bg-gray-500/90  fixed w-full top-0 left-0">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
          Bookstore    
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
 
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Enter Password for Edit
              </h1>

            
              <div class="space-y-4 md:space-y-6" >
         
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input id='PwdInput' onChange={pwdEntered} type="password" name="password"  placeholder="••••••••" class="bg-gray-50 border  text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                      " required=""/>
                  </div>
                  {errorMsg && <h1 className="text-indigo-600 text-center text-lg">{errorMsg}</h1> }
                  <div class="flex items-center justify-between">
                   
                     
                  </div>
                  <button id="PwdSubmit"  onClick={() =>AuthSignInHandler(enteredPwd)} type="submit" class="w-full text-white bg-indigo-800 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                  <hr></hr>
                  <button onClick={closeModal} id="PwdSubmit"   type="submit" class="w-full text-gray-700 bg-indigo-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Back</button>
              
              </div>
          </div>
      </div>
  </div>
</section>
   </>
)
}

export default EditAuthorAuthenticate;