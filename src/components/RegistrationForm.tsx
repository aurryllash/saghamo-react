import React, { useRef } from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="registration h-[100vh] flex justify-center items-start pt-20 bg-slate-600">
      <form className="registration_form" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-field">
          <label>
            UserName: <sup>*</sup>
          </label>
          <input
            type="text"
            {...register("userName", { required: "Field is required!" })}
            placeholder="john..."
          />
        </div>
        <div className="registration_errors">
          {errors.userName?.message && (
            <p className="text-red-500">{String(errors.userName.message)}</p>
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
            {...register("number", {
              required: "Field is required!",
              minLength: {
                value: 9,
                message: "Must be 9 number!",
              },
              maxLength: 9,
            })}
            placeholder="111 111 111..."
          />
        </div>
        <div className="registration_errors">
          {errors.number?.message && (
            <p className="text-red-500">{String(errors.number.message)}</p>
          )}
        </div>

        <div className="input-field">
          <label>
            Password: <sup>*</sup>
          </label>
          <input
            type="password"
            {...register("password", { required: "Field is required!", minLength: {
                value: 8,
                message: 'Must be at least 8 character!'
            } })}
            placeholder="sd%$df#6F37^g"
          />
        </div>
        <div className="registration_errors">
          {errors.password?.message && (
            <p className="text-red-500">{String(errors.password.message)}</p>
          )}
        </div>

        <div className="input-field">
          <input type="submit" />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
