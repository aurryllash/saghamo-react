import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./RegistrationForm.css";
import { Button } from "@headlessui/react";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
        username: 'john',
        email: 'john@gmail.com',
        phone: 555555555,
        password: '123321123'
    }
  });

  const [userExistError, setUserExistError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
      fetch("/api/registration", {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(res => {
        if(!res.ok) {
          return res.json().then(response => {
            if(response == 'User already exist') {
              setUserExistError('User already exists. Please choose a different email.')
            }
          })
        }
        return res.json()
      })
      .then(response => {
        if(response === 'User already exist') {
          console.log(response)
        }
      })
      .catch(error => console.log(error))
  };

  return (
    <div className="registration h-[100vh] flex justify-center items-start pt-20 bg-slate-600">
      <div className="registration_wrapper">
        <h1>REGISTRATION</h1>
        <form className="registration_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-field">
            <label>
              UserName: <sup>*</sup>
            </label>
            <input
              type="text"
              {...register("username", { required: "Field is required!", minLength: {
                value: 5,
                message: 'Must be at least 5 character!'
              } })}
              placeholder="john..."
            />
          </div>
          <div className="registration_errors">
            {errors.username?.message && (
              <p className="text-red-500">{String(errors.username.message)}</p>
            )}
          </div>

          <div className="input-field">
            <label>
              Email: <sup>*</sup>
            </label>
            <input
              type="email"
              {...register("email", { required: "Field is required!" })}
              placeholder="example@gmail.com..."
            />
          </div>
          <div className="registration_errors">
            {errors.email?.message && (
              <p className="text-red-500">{String(errors.email.message)}</p>
            )}
            {userExistError && <p className="text-red-500">{String(userExistError)}</p>}
          </div>
          <div className="input-field">
            <label>
              Number: <sup>*</sup>
            </label>
            <input
              type="number"
              {...register("phone", {
                required: "Field is required!",
                minLength: {
                  value: 9,
                  message: "Must be 9 number!",
                }
              })}
              placeholder="111 111 111..."
            />
          </div>
          <div className="registration_errors">
            {errors.phone?.message && (
              <p className="text-red-500">{String(errors.phone.message)}</p>
            )}
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
          </div>
          <div className="registration_errors">
            {errors.password?.message && (
              <p className="text-red-500">{String(errors.password.message)}</p>
            )}
          </div>

          <div className="input-field">
            {/* <button type='submit'>SUBMIT</button> */}
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
};

export default RegistrationForm;
