## Introduction

A task management tool build using Angular.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# CLI commands used to aid the developement

ng new tmfrontend
ng add @angular/material
npm install @ngrx/store @ngrx/effects @ngrx/entity @ngrx/store-devtools --save

Component and modules used are created using
ng g c component_name
ng g m module name

## Tradeoff and consideration

Feature like role management, authentication etc are not taken into consideration, as they would take more than the estimated time and also is not part of the requirement. NestJs along with MySql is used as backend of this application. Test scripts are not considered as at the moment.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
