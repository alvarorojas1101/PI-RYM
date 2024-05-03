import React from "react";
import style from "./About.module.css";

import alvaroRojasImage from "../../assets/alvaroRojas.jpg";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.card}>
        <h1>Hola, soy Alvaro Rojas de la FT45b</h1>
        <div className={style.profile}>
          <img
            src={alvaroRojasImage}
            alt="Alvaro Rojas"
            className={style.profileImage}
          />
          <div className={style.profileInfo}>
            <h2>Desarrollador de Software | Estudiante de la FT45b</h2>
            <p>
              ¡Hola! Soy Alvaro Rojas, un apasionado estudiante de la FT45b con
              un interés especial en el desarrollo de software. Mi objetivo es
              crear aplicaciones web innovadoras y de alta calidad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
