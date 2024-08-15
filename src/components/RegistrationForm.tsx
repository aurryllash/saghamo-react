import React from "react";

const RegistrationForm = () => {
  return (
    <div className="registration h-[100vh] flex justify-center items-start pt-20 bg-slate-600">
      <form className="registration_form">
        <div className="input-field">
          <label>
            UserName: <sup>*</sup>
          </label>
          <input type="text" name="userName" placeholder="john..." />
        </div>
        <div className="input-field">
          <label>
            Email: <sup>*</sup>
          </label>
          <input type="email" name="email" placeholder="example@gmail.com..." />
        </div>
        <div className="input-field">
          <label>
            Number: <sup>*</sup>
          </label>
          <input type="text" name="number" placeholder="111 111 111..." />
        </div>
        <div className="input-field">
          <label>
            Password: <sup>*</sup>
          </label>
          <input type="password" name="password" placeholder="sd%$df#6F37^g" />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
