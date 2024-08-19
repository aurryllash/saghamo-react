import { Button } from '@headlessui/react';
import React from 'react'
import { useForm } from 'react-hook-form';

const SignInForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }
  return (
    <div className="registration h-[100vh] flex justify-center items-start pt-20 bg-slate-600">
      <div className="registration_wrapper">
        <h1>SIGN IN</h1>
        <form className="registration_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-field">
            <label>
              Email: <sup>*</sup>
            </label>
            <input
              type="email"
              {...register("email", { required: "Field is required!" })}
              placeholder="example@gmail.com..."
            />
            <div className="registration_errors">
              {errors.email?.message && (
                <p className="text-red-500">{String(errors.email.message)}</p>
              )}
            </div>
          </div>
          <div className="input-field">
            <label>
              Password: <sup>*</sup>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Field is required!",
                minLength: {
                  value: 8,
                  message: "Must be at least 8 character!",
                },
              })}
              placeholder="sd%$df#6F37^g"
            />
            <div className="registration_errors">
              {errors.password?.message && (
                <p className="text-red-500">
                  {String(errors.password.message)}
                </p>
              )}
            </div>
          </div>
          <div className="input-field">
            <Button
              type="submit"
              className="rounded w-[100%] max-w-80 bg-black py-[12px] px-20   text-white data-[hover]:bg-transparent data-[active]:bg-white data-[active]:text-black"
            >
              Registration
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignInForm