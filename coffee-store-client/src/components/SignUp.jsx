import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const createdAt = result.user?.metadata?.creationTime;
                //new user has been created
                const users = { email, createdAt: createdAt };


                fetch('https://coffee-store-server-eight-tau.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(users)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                      
                        if (data.insertedId) {
                            if (data.insertedId) {
                                Swal.fire({
                                    title: 'Success!',
                                    text: 'User added to the database',
                                    icon: 'success',
                                    confirmButtonText: 'Ok'
                                })
                            
                            }

                        }
                    })
            })

            .catch(error => {
                console.error(error.message)
            })


    }
    return (

        <div>
            <h2 className="text-3xl my-10 text-center">Please Sign Up</h2>
            <form onSubmit={handleSignUp} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
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
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="p-4 bg-[#331A15] text-white">Sign Up</button>
                </div>
            </form>
            <p className="text-center mt-4">Already Have an Account ?
                <Link to="/signIn" className="text-blue-600 font-bold">Login</Link></p>
        </div>

    );
};

export default SignUp;