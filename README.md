# 🚀 Rick and Morty Explorer - PI Henry

[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)

Aplicación full-stack para explorar el universo de Rick and Morty, desarrollada
como proyecto integrador para SoyHenry.

**Enlace al repositorio**: [GitHub](https://github.com/alvarorojas1101/PI-RYM)

## 🌟 Características Principales

- Búsqueda de personajes por ID
- Visualización detallada de personajes
- Sistema de favoritos
- Ordenamiento y filtrado
- Diseño responsive

## 🛠 Tecnologías Utilizadas

**Frontend**:

<div>
  <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white" alt="Redux">
  <img src="https://img.shields.io/badge/React_Router-CA4245?logo=react-router&logoColor=white" alt="React Router">
  <img src="https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white" alt="Axios">
</div>

**Backend**:

<div>
  <img src="https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Express-000000?logo=express" alt="Express">
  <img src="https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black" alt="Firebase">
</div>

## ⚙️ Instalación Local

1. Clonar el repositorio:
```bash
git clone https://github.com/alvarorojas1101/PI-RYM.git
cd PI-RYM
```

2. Instalar dependencias:
```bash
cd back
npm install
cd ../front
npm install
```

3. Iniciar los servidores:
```bash
cd ../back
npm start

# En otra terminal
cd ../front
npm run dev
```

## 🚀 Despliegue

La aplicación está desplegada en Vercel. Visita el enlace en la sección "Demo" para ver la aplicación en acción.

## 📝 Licencia

Este proyecto está bajo la licencia MIT.

POST /login Autenticación JWT

GET /character/:id Detalle completo del personaje

POST /fav Añadir a favoritos

DELETE /fav/:id Eliminar de favoritos
