import style from "./Form.module.css";
import { useEffect, useState } from "react";
import validation from "./validation";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isFormValid, setIsFormValid] = useState(false);
  useEffect(() => {
    const isValid =
      Object.values(errors).every((error) => error === "") &&
      Object.values(userData).every((value) => value.trim() !== "");

    setIsFormValid(isValid);
  }, [userData, errors]);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  const handlesSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.container}>
      <form
        className={`${style.form} ${style.animatedForm}`}
        onSubmit={handlesSubmit}>
        <h1 className={style.h1Form}>RICK AND MORTY APP</h1>
        <h2 className={style.h2Form}>Login</h2>

        {errors.email && <p className={style.pForm}>{errors.email}</p>}
        <label className={style.labelForm}>
          Email:
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            key="email"
            value={userData.email}
            onChange={handleChange}
            className={style.inputForm}
          />
        </label>

        {errors.password && <p className={style.pForm}>{errors.password}</p>}
        <label className={style.labelForm}>
          Password:
          <input
            type="password"
            placeholder="Password"
            name="password"
            key="password"
            value={userData.password}
            onChange={handleChange}
            className={style.inputForm}
          />
        </label>
        <button
          type="submit"
          className={`${style.buttonForm} ${
            isFormValid ? style.buttonActive : ""
          }`}
          disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
}
