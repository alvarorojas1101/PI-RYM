# 🚀 Rick and Morty Explorer - PI Henry

[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-blue)](https://www.postgresql.org/)

Aplicación full-stack para explorar el universo de Rick and Morty, desarrollada
como proyecto integrador para SoyHenry.

**Enlace al repositorio**: [GitHub](https://github.com/alvarorojas1101/PI-RYM)

![Demo de la aplicación](https://via.placeholder.com/800x400.png?text=Rick+Morty+App+Preview)

## 🌟 Impacto y Logros Clave

- Implementación de sistema de autenticación JWT seguro
- Base de datos con +500 personajes de la serie
- Sistema de favoritos persistente
- Optimización de rendimiento (tiempos de respuesta <500ms)
- Diseño responsive y accesible

## 🛠 Tecnologías Principales

**Frontend**:

<div>
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white" alt="Redux">
  <img src="https://img.shields.io/badge/CSS_Modules-000000?logo=css3" alt="CSS Modules">
</div>

**Backend**:

<div>
  <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?logo=express" alt="Express">
  <img src="https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white" alt="PostgreSQL">
</div>

## ⚙️ Instalación Local

# Clonar repositorio

git clone https://github.com/alvarorojas1101/PI-RYM.git cd PI-RYM/back

# Instalar dependencias

npm install

POST /register Crea un nuevo usuario

POST /login Autenticación JWT

GET /character/:id Detalle completo del personaje

POST /fav Añadir a favoritos

DELETE /fav/:id Eliminar de favoritos
