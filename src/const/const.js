export const about = [
  "HTML", 
  "CSS",
  "JavaScript",
  "Reactjs",
  "Nodejs",
  "Express",
  "Tailwind",
  "NetCore",
  "MongoDB",
  "SQL",
  "Git",
]

export const studies = [
  {
    title: "Líder de Desarrollo Web",
    corporation: "Devdatep Consulting - Remoto",
    description: "Encargado de liderar el desarrollo de aplicaciones web, con tecnologías como React y Laravel. Además de gestionar las diferentes áreas del equipo de desarrollo (FrontEnd, BackEnd, Base de datos, Diseño Web, Documentación), para cumplir con los objetivos del proyecto.",
    date: "Desde MAYO de 2024 hasta SETIEMBRE de 2024",
    certificate: "/CERTIFICADOALVARONEIRA.pdf"
  },
  {
    title: "Desarrollador React JR",
    corporation: "Devdatep Consulting - Remoto",
    description: "Desarrollador FrontEnd con React, para el desarrollo de aplicaciones web, con tecnologías como React, Tailwind, React Query, Zustand, entre otros. Además de aprender sobre el desarrollo de aplicaciones web, para mejorar mis habilidades en el desarrollo de software.",
    date: "Desde MAYO de 2024 hasta AGOSTO de 2024",
    certificate: ""
  },
  {
    title: "Aprendizaje Ingeniería de Computación y Sistemas",
    corporation: "Universidad de San Martín de Porres",
    description: "Estudiante de la carrera de Ingeniería de Computación y Sistemas, para aprender sobre el desarrollo de software, bases de datos, redes, entre otros.",
    date: "Desde AGOSTO de 2017 hasta JUNIO de 2023",
    certificate: ""
  },
];

export const IconKeys = {
  html: "html",
  css: "css",
  javaScript: "javaScript",
  react: "react",
  astro: "astro",
  materialUi: "materialUi",
  styled: "styled",
  tailwind: "tailwind",
  reactQuery: "reactQuery",
  typeScript: "typeScript",
  zustand: "zustand",
  git: "git",
  github: "github",
  mongodb: "mongodb",
  nodejs: "nodejs",
  vite: "vite",
  angular: "angular",
  aws: "aws",
  bootstrap: "bootstrap",
  cSharp: "cSharp",
  docker: "docker",
  elementor: "elementor",
  express: "express",
  heroku: "heroku",
  jest: "jest",
  jwt: "jwt",
  laravel: "laravel",
  microsoft: "microsoft",
  mySql: "mySql",
  nest: "nest",
  net: "net",
  npm: "npm",
  postgresql: "postgresql",
  postman: "postman",
  prisma: "prisma",
  railway: "railway",
  reactRouter: "reactRouter",
  sequelize: "sequelize",
  socketIO: "socketIO",
  spring: "spring",
  sqlServer: "sqlServer",
  swagger: "swagger",
  unity: "unity",
  vercel: "vercel",
  vitest: "vitest",
  wordpress: "wordpress",
  zod: "zod",
  vscode: "vscode"
  // here add more icon keys
};

export const skills = [
  {
    title: "Html",
    icon: IconKeys.html,
  },
  {
    title: "Css",
    icon: IconKeys.css,
  },
  {
    title: "JavaScript",
    icon: IconKeys.javaScript,
  },
  {
    title: "Astro",
    icon: IconKeys.astro,
  },
  {
    title: "Tailwindcss",
    icon: IconKeys.tailwind,
  },
  {
    title: "React Js",
    icon: IconKeys.react,
  },
  {
    title: "Node Js",
    icon: IconKeys.nodejs,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },
  {
    title: "TypeScript",
    icon: IconKeys.typeScript,
  },
  {
    title: "React Query",
    icon: IconKeys.reactQuery,
  },
  {
    title: "ViteJS",
    icon: IconKeys.vite,
  },
  {
    title: "MongoDb",
    icon: IconKeys.mongodb,
  },
  {
    title: "Express",
    icon: IconKeys.express,
  },
  {
    title: "Laravel",
    icon: IconKeys.laravel,
  },
  {
    title: "Socket IO",
    icon: IconKeys.socketIO,
  },
  {
    title: "Net Core",
    icon: IconKeys.net,
  },
  {
    title: "Docker",
    icon: IconKeys.docker,
  },
  {
    title: "Prisma",
    icon: IconKeys.prisma,
  },
  {
    title: "Postman",
    icon: IconKeys.postman,
  },
  {
    title: "Jest",
    icon: IconKeys.jest,
  },
  {
    title: "Unity",
    icon: IconKeys.unity,
  },
  {
    title: "VsCode",
    icon: IconKeys.vscode,
  },
  {
    title: "Npm",
    icon: IconKeys.npm,  
  },
  {
    title: "Spring",
    icon: IconKeys.spring,
  },
  {
    title: "Angular",
    icon: IconKeys.angular,
  },
  {
    title: "Mysql",
    icon: IconKeys.mySql,
  }
  
];

export const projectsitem = [
  {
    id: 1,
    nombre: "Aplicación ToDoList con ReactJS",
    resumen: "Aplicación para registrar tareas pendientes, completadas y eliminadas.",
    descripcion: "Aplicación ToDo realizado con ReactJS, para aprender sobre los React Hooks y el manejo de estado. Se desarrolló un CRUD de tareas, con la posibilidad de agregar, eliminar, editar y marcar como completada una tarea. Además de la implementación de estilos con Css.",
    repositorio: ["https://github.com/Neira21/react-todo-usereducer", "https://github.com/Neira21/app-todo", "https://github.com/Neira21/ListaTareas-react-typescript"],
    comentario: "Proyecto Personal, para aprender acerca de ReactJS y su estructura basado en componentes. Después de aprender html, css y javascript, decidí aprender ReactJS para poder crear aplicaciones web más complejas y dinámicas. Entre las hooks aprendidos fueron: useState, useEffect, useRef, useReducer y entre otros",
    website: ["https://neira21.github.io/app-todo/", "https://neira21.github.io/react-todo-usereducer/", "https://neira21.github.io/ListaTareas-react-typescript/"],
    imagen: "./img/app-todo.png",
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.typeScript,
      }
    ],
  },
  {
    id: 2,
    nombre: "Aplicación de Clima-AppClima",
    resumen: "Aplicación para obtener el clima de una ciudad en específico.",
    descripcion: "Aplicación del clima realizada con ReactJS, para aprender sobre el consumo de una API. Se utilizó la API de OpenWeatherMap para obtener los datos del clima de una ciudad en específico. Se implementó un buscador de ciudades, para obtener el clima de la ciudad deseada. Se aprendió a utilizar las herramientas para consumir una API, por ejemplo fetch o axios.",
    repositorio: ["https://github.com/Neira21/app-clima"],
    comentario: "Primer proyecto en la que se usa un api, se aprendió a consumir una api y a mostrar los datos en la pantalla, en este caso obtener el clima de una ciudad en específico.",
    imagen: "./img/app-clima-react.png",
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
    ],
    website:[""]
  },
  {
    id: 3,
    nombre: "FrontEnd Tienda Virtual-app-store",
    resumen: "Tienda virtual para visualizar productos y agregar al carrito de compras. (FrontEnd)",
    descripcion: "FrontEnd de una tienda virtual, realizado con ReactJS, para aprender sobre el manejo de filtros (filtro por nombre, precio y categoría), además de agregar un carrito de compras el cual se puede agregar y eliminar productos, y calcular el total de la compra.",
    repositorio: ["https://github.com/Neira21/app-store"],
    comentario: "Proyecto para simular una tienda virtual y agregar los productos al carrito de compras, se aprendió el uso de Context para el manejo de estados globales. Más adelante se implementará el backend para poder realizar la compra de los productos usando las herramientas necesarias.",
    website: ["https://neira21.github.io/app-store/"],
    imagen: "./img/app-store.png",
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      }
    ],
  },
  {
    id: 4,
    nombre: "Aplicación FrontEnd TMDB-app-peliculas-tmdb",
    resumen: "Desarrollo de una aplicación para ver información de películas y series.",
    descripcion: "Aplicación de películas realizada con ReactJS, utilizando la API de The Movie Database (TMDB). Con buscador de películas, se puede seleccionar si se quiere buscar series o películas, se puede ver el detalle de pelicula y agregar una calificacion, luego en otra seccion se puede ver el ranking de las peliculas dado por el usuario,",
    repositorio: ["https://github.com/Neira21/app-peliculas-tmbd", "https://github.com/Neira21/app-react-movietmdb-vite"],
    comentario: "Se aprendió a consumir una API y a mostrar los datos en la pantalla. Además de aprender a utilizar React Router DOM para la navegación entre páginas. Se podría mejorar el proyecto añadiendo un login de usuario para que cada usuario pueda tener su lista de películas calificadas.",
    imagen: "./img/app-movie-tmbd.webp",
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.vite,
      },
    ],
    website: [""]
  },
  {
    id: 5,
    nombre: "Sistema Gestión Lavanderia",
    resumen: "Aplicación web para gestionar una lavandería.",
    descripcion: "Sistema de gestión de una lavandería, realizado con .Net Core. Se desarrolló un CRUD de clientes y empleados, un login de usuario quien será un empleado para acceder al sistema. Se puede crear servicios, listarlos, filtrarlo, generar boletas de pago, ver el estado del servicio y el estado de almacen de la lavandería",
    repositorio: ["https://github.com/Neira21/SwLavanderia-Desarrollo"],
    comentario: "Proyecto de universidad para el curso de ingeniería de software 1 y 2, se puede mejorar primero haciendo una actualización del código usando una versión actual de .net que es la 8, la versión 3.1 ya es obsoleta por lo que hay problemas de compatibilidad con las nuevas versiones de visual studio.",
    imagen: "./img/lavanderia-net.png",
    technologies: [
      {
        icon: IconKeys.net,
      },
      {
        icon: IconKeys.cSharp,
      },
      {
        icon: IconKeys.sqlServer,
      }
    ],
    website: [""]
  },
  {
    id: 6,
    nombre: "MovieApp NetCore",
    resumen: "Aplicación realizada en .Net para ver agregar películas y comentarios con sesión de usuario.",
    descripcion: "Aplicación de películas realizada con .Net Core 3.1, crud de peliculas y usuarios, login de usuario, los usuarios pueden agregar sus propias películas y ver las películas agregadas por otros usuarios, además de comentarios, calificación, noticias de películas, entre otros.",
    repositorio: ["https://github.com/Neira21/MovieApp"],
    comentario: "Fue un proyecto de universidad para el curso de programación 1 (6to ciclo), se aprendió a utilizar .net Core, la versión 3.1, se usó el ORM de Entity Framework para la conexión a la base de datos, y heroku para el despliegue de la aplicación y uso de la base de datos. Se podría mejorar actualizando el código a una versión más actual de .net, la versión 3.1 ya es obsoleta.",
    imagen: "./img/movie-net.webp",
    technologies: [
      {
        icon: IconKeys.net,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.cSharp,
      },
      {
        icon: IconKeys.sqlServer,
      },
      {
        icon: IconKeys.postgresql,
      },
      {
        icon: IconKeys.heroku,
      },
    ],
    website: [""]
  },
  {
    id: 7,
    nombre: "app-react-gastos-ingresos",
    resumen: "Aplicación en ReactJS para el control de ingresos y gastos.",
    descripcion: "Aplicación en ReactJS para el control de ingresos y gastos, usando paquete victory para la visualización de datos en gráficos, se puede agregar ingresos o gastos y se irá actualizando el monto total, además de mostrar los datos en un gráfico circular.",
    repositorio: ["https://github.com/Neira21/app-react-gastos-ingresos"],
    comentario: "Proyecto personal hecho en react para aprender a usar nuevos pquetes de react, en este caso se usó victory para la visualización de datos en gráficos.",
    website: ["https://neira21.github.io/app-react-gastos-ingresos"],
    imagen: "./img/app-gastos-ingresos.png",
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.vite,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.css,
      },
    ]
  },
  {
    id: 8,
    nombre: "Advice-generator-app",
    resumen: "Generador de consejos aleatorios con la api de Advice Slip.",
    descripcion: "Generar consejor aleatorios con la api de Advice Slip y se muestra en pantalla. Se utilizó tailwind para los estilos de la aplicación.",
    repositorio: ["https://github.com/Neira21/Advice-generator-app-Neira21"],
    comentario: "Challenge de Frontend Mentor, para practicar el uso de tailwind y la implementación de una api en react. Se podría mejorar añadiendo un botón para compartir el consejo en las redes sociales.",
    website: ["https://neira21.github.io/Advice-generator-app-Neira21/"],
    imagen: "./img/advice-generator.png",
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.css,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
    ]
  },
  {
    id: 9,
    nombre: "node-chat-websocket",
    resumen: "Aplicación de chat en tiempo real, usando NodeJS, Express y Socket.io.",
    descripcion: "Aplicación de chat en tiempo real, usando NodeJS, Express y Socket.io. Se puede enviar mensajes en tiempo real. Se puede enviar mensajes a todos los usuarios o enviar mensajes privados a un usuario en específico.",
    repositorio: ["https://github.com/Neira21/node-chat-websocket"],
    comentario: "Este proyecto está siendo desarrollado actualmente, se está aprendiendo a usar socket.io para la comunicación en tiempo real entre el servidor y el cliente.",
    imagen: "./img/node-chat.png",
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.nodejs,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.socketIO,
      },
    ],
    website: [""]
  },
  {
    id: 10,
    nombre: "Sistema Gestión Asistencia",
    resumen: "Sistema de control de asistencia de usuarios mediante reconocimiento facial.",
    descripcion: "Aplicación para gestionar de forma eficiente la asistencia de usuarios mediante un sistema de reconocimiento facial, se puede registrar usuarios, tomar asistencia, ver el historial de asistencia, ver el estado de la asistencia, entre otros.",
    repositorio: [""],
    comentario: "",
    imagen: "./img/app-assist.png",
    website: ["https://assistdatep.devdatep.com/login"],
    technologies: [
      {
        icon: IconKeys.react,
      },
      {
        icon: IconKeys.laravel,
      },
      {
        icon: IconKeys.javaScript,
      },
      {
        icon: IconKeys.tailwind,
      },
      {
        icon: IconKeys.reactQuery,
      },
      {
        icon: IconKeys.zustand,
      },
    ],
  },
]
