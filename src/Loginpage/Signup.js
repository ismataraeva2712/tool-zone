import React from 'react';
import { useForm } from 'react-hook-form';

import Loading from './Loading';
import { Link, useNavigate } from 'react-router-dom';
import {FaUserAlt} from 'react-icons/fa';

import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useToken from '../Hook/useToken';
const Signup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, error2] = useUpdateProfile(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const[token]=useToken(user || gUser)
      const navigate=useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (updating||loading || gLoading) {
        <Loading></Loading>
      }
      let errorMessage;
      if(gError|| error || error2){
          errorMessage=<p className='text-primary'>{gError?.message||error?.message || error2?.message}</p>
      }
    const onSubmit =async( data )=> {
       await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName:data.name });
        navigate('/')
    };
    return (
        <div className='flex justify-center items-center h-screen'>
        <div class="card w-96 bg-base-100 shadow-xl">

            <div class="card-body items-center text-center">
                <h2 class="card-title font-bold"> <FaUserAlt className='text-primary'/>SignUp</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>

                                </label>
                                <input {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required'
                                    }
                                })}
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    {errors.name?.type === 'required' &&
                                        <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                                </label>
                            </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>

                        </label>
                        <input {...register("email", {
                            required: {
                                value: true,
                                message: 'email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'use a proper email'
                            }
                        })}
                            type="email"
                            placeholder="Your email"
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.email?.type === 'required' &&
                                <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' &&
                                <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>
                        <input {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'must be 6 character or longer'
                            }
                        })}
                            type="password"
                            placeholder="Your Password"
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label">
                            {errors.password?.type === 'required' &&
                                <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' &&
                                <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                        </label>
                    </div>
                    {errorMessage}
                    <input className='btn w-full max-w-xs btn-primary' type="submit" value='Sign Up' />
                </form>
                <p><small> <span >Already have an account?</span><Link className='text-sky-600' to='/login'>Sign In</Link></small></p>
                <div class="divider">OR</div>
                <button onClick={() => signInWithGoogle()} class="btn  btn-primary">Continue With Google</button>
            </div>
        </div>
    </div>
    );
};

export default Signup;