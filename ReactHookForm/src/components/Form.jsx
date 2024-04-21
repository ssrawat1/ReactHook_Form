import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Form() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm(); // this is useForm() hook

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmit = async (data) => {
    //  const onSubmit = data => console.log(data)  which provide data directly to us  with arrow fucntion
    await delay(2); // simulating network delay
    // console.log(data);
    navigate("/DisplayUserData", { state: { formData: data } }); // { formData: data } => formData is variable so we can write anything in place of that
    reset();
  };

  return (
    <>
      <div className="form-container">
        <form action="./" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <h1>Registration Form</h1>
          <label>Username</label>
          <input
            placeholder="username"
            type="text"
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters long",
              },
              maxLength: {
                value: 20,
                message: "Username cannot exceed 20 characters",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.\- ]*$/,
                message:
                  "Username must contain only letters, numbers, hyphens, underscores, and periods",
              },
            })}
          />
          <div className="username-error">
            {errors.username && <span>{errors.username.message}</span>}
          </div>
          <label>Email</label>
          <input
            placeholder="Email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          <div className="email-error">
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <label>Password</label>
          <input
            placeholder="password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
              maxLength: {
                value: 25,
                message: "Password cannot exceed 25 characters",
              },
              pattern: {
                value:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and must be at least 8 characters long",
              },
            })}
          />
          <div className="password-error">
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <label>Phone Number</label>
          <input
            placeholder=" Phone Number"
            type="tel"
            {...register("PhoneNumber", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Phone number must be 10 digits long",
              },
            })}
          />
          <div className="PhoneNumber-error">
            {errors.PhoneNumber && <span>{errors.PhoneNumber.message}</span>}
          </div>
          <div className="input-submit">
            <input id="submit" disabled={isSubmitting} type="submit" />
          </div>
          <div className="loading">{isSubmitting && <h3>loading.....</h3>}</div>
        </form>
      </div>
    </>
  );
}

export default Form;
