import React, { useContext } from 'react';
import { contex } from './contex/ContexProvider';
import { sendEmailVerification } from 'firebase/auth';





const Register = () => {
    let { handleBTN } = useContext(contex)



    let forOnSub = () => {

        event.preventDefault()

        let form = event.target
        let email = form.email.value
        let password = form.password.value
        console.log(email, password);

        handleBTN(email, password)
            .then(res => {
                let logedIn = res.user
                console.log(logedIn);
                verefy(res.user)
            })
            .catch(error => {
                console.log(error.massage);
            })


    }


    let verefy = (user) => {

        sendEmailVerification(user)
        alert("verify email")


    }






    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">register  now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={forOnSub} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;