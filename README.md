
# Market

Este proyecto es una aplicación web desarrollada en Angular 16 que implementa técnicas avanzadas como carga progresiva (lazy loading) y estilización con SASS. La aplicación está diseñada para la administración de productos a través de un dashboard, permitiendo operaciones CRUD (Crear, Leer, Actualizar y Eliminar) mediante microservicios HTTP.


## Requirements

- [Node (v20.8.0)](https://nodejs.org/en)
- [Angular CLI (v16.2.10)](https://angular.io/cli)
    
    
## Run Locally

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


## Structure

```bash
.
├── src
│   ├── app
│   │   ├── modules
│   │   │   ├── dashboard
│   │   │   └── landing
│   │   │       └── pages
│   │   ├── utils
│   │   │   ├── guards
│   │   │   ├── interceptors
│   │   │       └── loading.interceptor.ts
│   │   │   ├── services
│   │   │       └── loading.service.ts
│   │   │   ├── models
│   │   │   └── styles
│   │   │       └── variables.scss
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

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Run the next command for generate module of lazy loading
```bash
    ng generate module modules/[new_module] --route modules/[new_module] --module app.module
```
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Blue Dark | ![#2e54ea](https://via.placeholder.com/10/2e54ea?text=+) #2e54ea |
| Blue Ligth | ![#f0f5ff](https://via.placeholder.com/10/f0f5ff?text=+) #f0f5ff |
| Gray Dark | ![#6d7280](https://via.placeholder.com/10/6d7280?text=+) #6d7280 |
| Gray Ligth | ![#f9fafb](https://via.placeholder.com/10/f9fafb?text=+) #f9fafb |


## Authors

- [AndresOrozcoDev](https://github.com/AndresOrozcoDev)
