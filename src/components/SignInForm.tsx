import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@headlessui/react";
import { LoginData } from "./Interfaces/interface";
import "./SignInForm.css";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

const SignInForm = () => {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const [userNotExistError, setUserNotExistError] = useState<string | null | undefined>(
    null
  );
  const [wrongCredentials, setWrongCredentials] = useState<string | null | undefined>(null);

  const onSubmit = async (data: LoginData) => {
    setUserNotExistError(null);
    setWrongCredentials(null);
    try {
      // const response = await fetch('/api/login', {
      //     method: 'POST',
      //     headers: {
      //         "Content-Type": "application/json",
      //       },
      //       body: JSON.stringify(data)
      // })

      // const res = await response.json();

      // if(response.ok) {
      //     console.log(res)
      // } else {
      //     console.log('Something went wrong: ', res)
      //     if(res === 'User does not exist!') {
      //         setUserNotExistError('User does not exist. Please try again')
      //     }
      //     if(res === 'email or password is wrong.') {
      //         setWrongCredentials('Wrong credentials invalid username or password')
      //     }
      // }
      const result = await login(data);

      console.log(result)

      if (!result.success) {
        // Display error messages based on the response
        if (result.error === "User does not exist. Please try again.") {
          setUserNotExistError(result.error);
        } else if (
          result.error === "Wrong credentials: invalid username or password."
        ) {
          setWrongCredentials(result.error);
        } else {
          // Handle other types of errors (e.g., network issues)
          setWrongCredentials(result.error);
        }
      } else {
        console.log("Login successful! 111");
        // Redirect the user or perform other actions after a successful login
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div className="sign-in h-[100vh] flex justify-center items-start pt-20 sm:mx-5 bg-white">
      <div className="sign-in_wrapper px-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center pb-5">
          SIGN IN
        </h1>
        <form className="sign-in_form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-field">
            <label>
              Email: <sup>*</sup>
            </label>
            <input
              type="email"
              {...register("email", { required: "Field is required!" })}
              placeholder="example@gmail.com..."
            />
            <div className="sign-in_errors">
              {errors.email?.message && (
                <p className="text-red-500">{String(errors.email.message)}</p>
              )}
              {userNotExistError && (
                <p className="text-red-500">{String(userNotExistError)}</p>
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
            <div className="sign-in_errors">
              {errors.password?.message && (
                <p className="text-red-500">
                  {String(errors.password.message)}
                </p>
              )}
              {wrongCredentials && (
                <p className="text-red-500">{String(wrongCredentials)}</p>
              )}
            </div>
          </div>
          <div className="input-field">
            <Button
              type="submit"
              className="rounded w-[100%] max-w-80 bg-black py-[12px] px-20   text-white data-[hover]:bg-transparent data-[active]:bg-white data-[active]:text-black"
            >
              Sign In
            </Button>
          </div>
          <div className="options mt-2 ">
            <p>
              Do not have an account?
              <Link
                to="/registration"
                className="registration-link ml-2 hover:text-pink-400"
              >
                Registration
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
