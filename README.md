
# Market

Este proyecto es una aplicación web desarrollada en Angular version 16 que implementa técnicas avanzadas como carga progresiva (lazy loading) y estilización con SASS. La aplicación está diseñada para ingresar a un dashboard por medio de un inicio de sesion para la administración de productos, permitiendo operaciones CRUD (Crear, Leer, Actualizar y Eliminar) mediante microservicios HTTP.


## 🔧 Requirements

- [Node (v20.8.0)](https://nodejs.org/en)
- [Angular CLI (v16.2.10)](https://angular.io/cli)
    
    
## 🧰 Run Locally

Clone the project

```bash
  git clone https://github.com/AndresOrozcoDev/market_frontend_angular.git
```

Go to the project directory

```bash
  cd market_frontend_angular
```

Install dependencies

```bash
  npm install
```

Start the server

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

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run the next command for generate module of lazy loading

```bash
  ng generate module modules/[new_module] --route modules/[new_module] --module app.module
```

## 💻 Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## 🛠️ Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Generate coverage report with the next command and show report in coverage/market_frontend_angular/index.html.

```bash
  ng test --code-coverage
```

## ✒️ Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Blue Dark | ![#2e54ea](https://via.placeholder.com/10/2e54ea?text=+) #2E54EA |
| Gray Dark | ![#6d7280](https://via.placeholder.com/10/6d7280?text=+) #6D7280 |
| Gray Ligth | ![#f9fafb](https://via.placeholder.com/10/f9fafb?text=+) #F9FAFB |


## ✍️ Authors

- [AndresOrozcoDev](https://github.com/AndresOrozcoDev)