import style from "./About.module.css";
import alvaroRojasImage from "../../assets/alvaroRojas.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaSearch,
  FaInfoCircle,
  FaHeart,
  FaFilter,
} from "react-icons/fa";
import { SiExpress, SiRedux, SiAxios, SiFirebase } from "react-icons/si";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.card}>
        <div className={style.header}>
          <div>
            <h1>Hola, soy Alvaro Rojas de la FT45b</h1>
            <img
              src={alvaroRojasImage}
              alt="Alvaro Rojas"
              className={style.profileImageTop}
            />
            <h2>Desarrollador de Software | Estudiante de la FT45b</h2>
          </div>
        </div>

        <p>
          ¡Hola! Soy Alvaro Rojas, un apasionado estudiante con un gran interés
          en el desarrollo de software. Mi objetivo es crear aplicaciones web
          innovadoras y de alta calidad, aplicando buenas prácticas y
          tecnologías modernas.
        </p>

        <div className={style.links}>
          <a
            href="https://github.com/alvarorojas1101"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub size={24} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alvarorojas1101/"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin size={24} /> LinkedIn
          </a>
        </div>

        <p className={style.projectText}>
          Este proyecto es parte del curso de Full Stack Developer de Soy Henry.
          La aplicación permite explorar y gestionar personajes de Rick and
          Morty, incluyendo:
        </p>

        <div className={style.features}>
          <h2>¿Qué puedes hacer en esta app?</h2>
          <div className={style.featureCards}>
            <div className={style.card}>
              <FaSearch className={style.icon} />
              <p>Buscar personajes por ID</p>
            </div>
            <div className={style.card}>
              <FaInfoCircle className={style.icon} />
              <p>Ver detalles de personajes</p>
            </div>
            <div className={style.card}>
              <FaHeart className={style.icon} />
              <p>Guardar favoritos</p>
            </div>
            <div className={style.card}>
              <FaFilter className={style.icon} />
              <p>Ordenar y filtrar</p>
            </div>
          </div>
        </div>

        <div className={style.techIcons}>
          <FaReact title="React" />
          <FaNodeJs title="Node.js" />
          <SiExpress title="Express" />
          <SiRedux title="Redux" />
          <SiAxios title="Axios" />
          <SiFirebase title="Firebase" />
        </div>
      </div>
    </div>
  );
};

export default About;
