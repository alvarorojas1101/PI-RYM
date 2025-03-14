import style from "./Form.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import validation from "./validation";

export default function Form({ onSubmit, isLogin }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    submit: "",
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
    // Actualizamos userData y usamos el nuevo objeto para la validación
    const newUserData = { ...userData, [name]: value };
    setUserData(newUserData);
    setErrors((prev) => ({
      ...prev,
      [name]: validation(newUserData)[name],
    }));
  };

  const handlesSubmit = async (event) => {
    event.preventDefault();
    try {
      await onSubmit(userData);
      if (!isLogin) {
        alert("¡Registro exitoso! Redirigiendo...");
        navigate("/login");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "Error de conexión";
      setErrors((prev) => ({ ...prev, submit: errorMessage }));
      console.error("Error detallado:", error);
    }
  };

  return (
    <div className={style.container}>
      <form
        className={`${style.form} ${style.animatedForm}`}
        onSubmit={handlesSubmit}>
        <h1 className={style.h1Form}>RICK AND MORTY APP</h1>
        <h2 className={style.h2Form}>{isLogin ? "Ingreso" : "Registro"}</h2>

        {errors.email && <p className={style.pForm}>{errors.email}</p>}
        <label className={style.labelForm}>
          Email:
          <input
            type="email"
            placeholder="Ingresa tu email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className={style.inputForm}
          />
        </label>

        {errors.password && <p className={style.pForm}>{errors.password}</p>}
        <label className={style.labelForm}>
          Contraseña:
          <input
            type="password"
            placeholder="Ingresa tu contraseña"
            name="password"
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
          // disabled={!isFormValid}   <-- Comenta esta línea solo para pruebas
        >
          {isLogin ? "Ingresar" : "Registrarse"}
        </button>

        {errors.submit && <p className={style.pForm}>{errors.submit}</p>}

        <h2 className={style.h2Form}>
          {isLogin ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
          <p
            onClick={() => navigate(isLogin ? "/register" : "/login")}
            style={{ color: "#4CAF50", cursor: "pointer" }}>
            {isLogin ? "Regístrate aquí" : "Inicia sesión aquí"}
          </p>
        </h2>
      </form>
    </div>
  );
}
