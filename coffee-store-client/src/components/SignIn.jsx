import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';


const SignIn = () => {
    const {signInUser} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    console.log('Location in the login page',location);


   const handleSignIn = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);

    
    signInUser(email,password)
    .then(result =>{
        console.log(result.user);

         //navigate after login
         navigate(location?.state ? location?.state : '/');
         
        const users = {email, lastLoggedAt: result.user?.metadata?.lastSignInTime};
     //update last log in the database

     fetch('https://coffee-store-server-eight-tau.vercel.app/user',{
       method: 'PATCH',
        headers: {
            'content-type' : 'application/json'
        },
       body: JSON.stringify(users)
     })
     .then(res => res.json())
     .then(data => {
        console.log(data);
        if(data.email){
            form.reset()
        }
     })
    })
    .catch(error =>{
        console.log(error)
    })


   }
    return (
        <div>
          <h2 className="text-3xl my-10 text-center">Please Login</h2>

            <form onSubmit={handleSignIn} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="p-4 bg-[#331A15] text-white">Login</button>
                            </div>
                        </form>
                        <p className="text-center mt-4">Don't Have an Account ? <Link to="/signUp" className="text-blue-600 font-bold">Sign Up</Link></p>

        </div>
    );
};

export default SignIn;