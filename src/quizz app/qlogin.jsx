import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './qlogin.css'

const Login = () => {
    let navigate=useNavigate()

   
    
   
    return ( 
    <div className="quiz_login">
        <div className="loginimg">
            <img  width="700"height="700" src="/images/loginimage.jpg" alt="" />

        </div>
        <div className="fr_inp">
         <form action="">
            <label htmlFor="">First name  :  </label>
            <input type="name" required placeholder='enter first name'  />
            <br /><br />
            <label htmlFor="">Last Name  :  </label>
            <input  type="text" required placeholder='enter last name' />
            <br /> <br />
            <label htmlFor="">Email  :  </label>
            <input  type="text" required placeholder='enter email' />
            <br /><br />
            <label htmlFor="">Password  :  </label>
            <input type="text" required placeholder='enter password' />
            <br /> <br />
            <button><Link className='link' to="/instruction"> Sign up</Link></button>

         </form>
         </div>
    </div> 
    );
}
 
export default Login;
