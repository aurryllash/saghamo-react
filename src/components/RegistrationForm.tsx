import React from "react";
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
      // data.role = 'user';
      // data.purchasedProductsIds = null
      // console.log(data);
      fetch("/api/registration", {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(response => console.log(response))
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
              {...register("username", { required: "Field is required!" })}
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
