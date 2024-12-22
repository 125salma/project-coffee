import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import Swal from 'sweetalert2';

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


        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSignUp} className="card-body">
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
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default SignUp;