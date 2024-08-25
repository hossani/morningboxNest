"use client";

import login from '@/app/signin/login';
import React from 'react'
import { useFormState } from 'react-dom';

const FormConnection = () => {
  const [state, formAction] = useFormState(login, { error: "" });

  return (
    <div className="container-login" >
    <div className="div-logo-form">
        <img src='images/logo.avif' alt="logo" />
    </div>
    <div className="container-form-login" >
<form className="max-w-sm mx-auto" action={formAction}>
<div className="mb-5 titre-form-div">
<label  className="block mb-2 text-sm font-medium text-gray-900  titre-form">Sign in</label>
</div>

<div className="mb-4">
<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
<input type="email" name="email"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:bg-gray-600 dark:focus:border-gray-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
</div>
<div className="mb-4">
<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
<input type="password" name="password"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:bg-gray-600 dark:focus:border-gray-500 dark:shadow-sm-light"required />
</div>

<button  className="text-black  hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600 bg-yellow-600">Submit</button>
</form>
</div>
</div>  
)
}

export default FormConnection