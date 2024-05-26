
# Market

Este proyecto es una aplicación web desarrollada en Angular 16 que implementa técnicas avanzadas como carga progresiva (lazy loading) y estilización con SASS. La aplicación está diseñada para la administración de productos a través de un dashboard, permitiendo operaciones CRUD (Crear, Leer, Actualizar y Eliminar) mediante microservicios HTTP.


## 🔧 Requirements

Asegúrate de tener instalados los siguientes programas antes de ejecutar la aplicación:

- [Node (v20.8.0)](https://nodejs.org/en)
- [Angular CLI (v16.2.10)](https://angular.io/cli)
    
    
## 🧰 Run Locally

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

Clona el repositorio:

```bash
  git clone https://github.com/AndresOrozcoDev/market_frontend_angular.git
```

Navega al directorio del proyecto:

```bash
  cd market_frontend_angular
```

Instala las dependencias:

```bash
  npm install
```

Inicia el servidor:

```bash
  ng serve
```


## 📋 Structure

```bash
.
├── src
│   ├── app
│   │   ├── auth
│   │   ├── dashboard
│   │   ├── modules
│   │   │   └── supermarket
│   │   ├── utils
│   │   │   ├── guards
│   │   │   ├── interceptors
│   │   │   ├── services
│   │   │   ├── models
│   │   │   └── utils.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets
│   │   └── icons
│   ├── environments
│   │   └── environment.ts
│   ├── index.html
│   └── styles.scss
├── package.json
└── README.md
```


## 💬 Code scaffolding

Para generar un nuevo componente, ejecuta el siguiente comando:

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Para generar un módulo de carga diferida:

```bash
  ng generate module modules/[new_module] --route modules/[new_module] --module app.module
```


## 💻 Build

Para compilar el proyecto, ejecuta el siguiente comando:

```bash
  ng build
```

Los archivos compilados se guardarán en el directorio `dist/`.


## 🛠️ Running unit tests

Para ejecutar las pruebas unitarias utilizando [Karma](https://karma-runner.github.io), ejecuta el siguiente comando:

```bash
  ng test --code-coverage
```


## ✒️ Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Blue Dark | ![#2e54ea](https://via.placeholder.com/10/2e54ea?text=+) #2e54ea |
| Blue Ligth | ![#f0f5ff](https://via.placeholder.com/10/f0f5ff?text=+) #f0f5ff |
| Gray Dark | ![#6d7280](https://via.placeholder.com/10/6d7280?text=+) #6d7280 |
| Gray Ligth | ![#f9fafb](https://via.placeholder.com/10/f9fafb?text=+) #f9fafb |


## ✍️ Authors

- [AndresOrozcoDev](https://github.com/AndresOrozcoDev)