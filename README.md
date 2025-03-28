# SIM
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.0-next.2.

## Development server

Excecute npm i --legacy-peer-deps

## View Documentation

compodoc -p tsconfig.json

compodoc -s 

## Generate Tree Structure
tree src/app -I 'node_modules|dist|.git'


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## Button Action Permission
All botton or content to wich you want to add control bassed in permission CRUD, like edite, create, delete and update it  is necesary to add for each botton, div or <u> tack, the directive [actionPermission]="'nameAction'". With this directive, the system will be able to validate if some user has permission on some action and determine if the button or content is hidden or shown.

## Modal Loader

the modal loader case, is dynamic component. In this case, when you add loader, this component contain 4 differents class: sm, md, lg and default. If you want to change or alternate this class, depends de action in modal you have to add a queryParam like this /?st=md, where st is a style and value is a class, that you can see in Loader interceptor component in constant CONST_LOADER_STYLE and implemented in laoder.component.scss. You can add more class of modal style, always with prefix .XX-modal-content where XX is refered to your new class. Remember, add you new class in constants File CONST_LOADER_STYLE. If you don't add in this const, the class isn't set.


## Arquitecture

src/app
├── app.component.html
├── app.component.scss
├── app.component.spec.ts
├── app.component.ts
├── app.config.server.ts
├── app.config.ts
├── app.routes.ts
├── core
│   ├── UI
│   │   ├── components
│   │   │   ├── auth
│   │   │   │   ├── auth.component.html
│   │   │   │   ├── auth.component.scss
│   │   │   │   ├── auth.component.spec.ts
│   │   │   │   ├── auth.component.ts
│   │   │   │   └── authModule.ts
│   │   │   └── dash-board
│   │   │       ├── administration
│   │   │       ├── general-management
│   │   │       │   ├── generalManagement.component.html
│   │   │       │   ├── generalManagement.component.scss
│   │   │       │   ├── generalManagement.component.spec.ts
│   │   │       │   ├── generalManagement.component.ts
│   │   │       │   ├── generalManagement.routes.ts
│   │   │       │   └── generalManagementModule.ts
│   │   │       ├── home
│   │   │       │   ├── dash-board.component.html
│   │   │       │   ├── dash-board.component.scss
│   │   │       │   ├── dash-board.component.spec.ts
│   │   │       │   ├── dash-board.component.ts
│   │   │       │   ├── dashBoardModule.ts
│   │   │       │   └── dashboard.routes.ts
│   │   │       └── services-reservation
│   │   └── pages
│   │       ├── auth
│   │       │   ├── change-password
│   │       │   │   ├── change-password.component.html
│   │       │   │   ├── change-password.component.scss
│   │       │   │   ├── change-password.component.spec.ts
│   │       │   │   ├── change-password.component.ts
│   │       │   │   └── changePasswordModule.ts
│   │       │   ├── entities
│   │       │   │   ├── entities.component.html
│   │       │   │   ├── entities.component.scss
│   │       │   │   ├── entities.component.spec.ts
│   │       │   │   ├── entities.component.ts
│   │       │   │   └── entitiesModule.ts
│   │       │   ├── login
│   │       │   │   ├── login.component.html
│   │       │   │   ├── login.component.scss
│   │       │   │   ├── login.component.spec.ts
│   │       │   │   ├── login.component.ts
│   │       │   │   └── loginModule.ts
│   │       │   └── sendResetLink
│   │       │       ├── send-reset-link.component.html
│   │       │       ├── send-reset-link.component.scss
│   │       │       ├── send-reset-link.component.spec.ts
│   │       │       ├── send-reset-link.component.ts
│   │       │       └── sendResetLinkModule.ts
│   │       └── dash-board
│   │           ├── components
│   │           │   ├── home
│   │           │   │   ├── home.component.html
│   │           │   │   ├── home.component.scss
│   │           │   │   ├── home.component.spec.ts
│   │           │   │   └── home.component.ts
│   │           │   ├── planning
│   │           │   │   ├── download-reports
│   │           │   │   │   ├── download-reports.component.html
│   │           │   │   │   ├── download-reports.component.scss
│   │           │   │   │   ├── download-reports.component.spec.ts
│   │           │   │   │   └── download-reports.component.ts
│   │           │   │   ├── manage-projects
│   │           │   │   │   ├── components
│   │           │   │   │   │   ├── collaboration-projects
│   │           │   │   │   │   │   ├── collaboration-projects.component.html
│   │           │   │   │   │   │   ├── collaboration-projects.component.scss
│   │           │   │   │   │   │   ├── collaboration-projects.component.spec.ts
│   │           │   │   │   │   │   └── collaboration-projects.component.ts
│   │           │   │   │   │   ├── evaluation-projects
│   │           │   │   │   │   │   ├── evaluation-projects.component.html
│   │           │   │   │   │   │   ├── evaluation-projects.component.scss
│   │           │   │   │   │   │   ├── evaluation-projects.component.spec.ts
│   │           │   │   │   │   │   └── evaluation-projects.component.ts
│   │           │   │   │   │   ├── modals
│   │           │   │   │   │   │   ├── create-product
│   │           │   │   │   │   │   │   ├── create-product.component.html
│   │           │   │   │   │   │   │   ├── create-product.component.scss
│   │           │   │   │   │   │   │   ├── create-product.component.spec.ts
│   │           │   │   │   │   │   │   ├── create-product.component.ts
│   │           │   │   │   │   │   │   └── products-module.ts
│   │           │   │   │   │   │   ├── create-project-modal
│   │           │   │   │   │   │   │   ├── create-project-modal.component.html
│   │           │   │   │   │   │   │   ├── create-project-modal.component.scss
│   │           │   │   │   │   │   │   ├── create-project-modal.component.spec.ts
│   │           │   │   │   │   │   │   ├── create-project-modal.component.ts
│   │           │   │   │   │   │   │   └── createProjects.modules.ts
│   │           │   │   │   │   │   └── monitoring-project
│   │           │   │   │   │   │       ├── monitoring-project.component.html
│   │           │   │   │   │   │       ├── monitoring-project.component.scss
│   │           │   │   │   │   │       ├── monitoring-project.component.spec.ts
│   │           │   │   │   │   │       └── monitoring-project.component.ts
│   │           │   │   │   │   └── projects-general
│   │           │   │   │   │       ├── projects.component.html
│   │           │   │   │   │       ├── projects.component.scss
│   │           │   │   │   │       ├── projects.component.spec.ts
│   │           │   │   │   │       └── projects.component.ts
│   │           │   │   │   ├── manage-projects.component.html
│   │           │   │   │   ├── manage-projects.component.scss
│   │           │   │   │   ├── manage-projects.component.spec.ts
│   │           │   │   │   ├── manage-projects.component.ts
│   │           │   │   │   └── manageProjectsModule.ts
│   │           │   │   ├── planning-strategies
│   │           │   │   │   ├── components
│   │           │   │   │   │   ├── indicators
│   │           │   │   │   │   │   ├── indicators.component.html
│   │           │   │   │   │   │   ├── indicators.component.scss
│   │           │   │   │   │   │   ├── indicators.component.spec.ts
│   │           │   │   │   │   │   ├── indicators.component.ts
│   │           │   │   │   │   │   └── indicators.modules.ts
│   │           │   │   │   │   ├── modals
│   │           │   │   │   │   │   ├── guidelines-modal
│   │           │   │   │   │   │   │   ├── guideLines.modules.ts
│   │           │   │   │   │   │   │   ├── guidelines-modal.component.html
│   │           │   │   │   │   │   │   ├── guidelines-modal.component.scss
│   │           │   │   │   │   │   │   ├── guidelines-modal.component.spec.ts
│   │           │   │   │   │   │   │   └── guidelines-modal.component.ts
│   │           │   │   │   │   │   ├── indicators-modal
│   │           │   │   │   │   │   │   ├── indicators-modal.component.html
│   │           │   │   │   │   │   │   ├── indicators-modal.component.scss
│   │           │   │   │   │   │   │   ├── indicators-modal.component.spec.ts
│   │           │   │   │   │   │   │   ├── indicators-modal.component.ts
│   │           │   │   │   │   │   │   └── indicators.modules.ts
│   │           │   │   │   │   │   └── plans-modal
│   │           │   │   │   │   │       ├── plans-modal.component.html
│   │           │   │   │   │   │       ├── plans-modal.component.scss
│   │           │   │   │   │   │       ├── plans-modal.component.spec.ts
│   │           │   │   │   │   │       ├── plans-modal.component.ts
│   │           │   │   │   │   │       └── plans.modules.ts
│   │           │   │   │   │   ├── strategic-guidelines
│   │           │   │   │   │   │   ├── strategic-guidelines.component.html
│   │           │   │   │   │   │   ├── strategic-guidelines.component.scss
│   │           │   │   │   │   │   ├── strategic-guidelines.component.spec.ts
│   │           │   │   │   │   │   ├── strategic-guidelines.component.ts
│   │           │   │   │   │   │   └── strategicGuidelines.modules.ts
│   │           │   │   │   │   └── strategic-plans
│   │           │   │   │   │       ├── strategic-plans.component.html
│   │           │   │   │   │       ├── strategic-plans.component.scss
│   │           │   │   │   │       ├── strategic-plans.component.spec.ts
│   │           │   │   │   │       ├── strategic-plans.component.ts
│   │           │   │   │   │       └── strategicPlans.modules.ts
│   │           │   │   │   ├── planning-strategies.component.html
│   │           │   │   │   ├── planning-strategies.component.scss
│   │           │   │   │   ├── planning-strategies.component.spec.ts
│   │           │   │   │   ├── planning-strategies.component.ts
│   │           │   │   │   └── planningStrategiesModule.ts
│   │           │   │   └── reports-planning
│   │           │   │       ├── reports-planing.component.html
│   │           │   │       ├── reports-planing.component.scss
│   │           │   │       ├── reports-planing.component.spec.ts
│   │           │   │       └── reports-planing.component.ts
│   │           │   └── services-reservation
│   │           │       ├── component1
│   │           │       └── component2
│   │           └── side-menu
│   │               ├── side-menu.component.html
│   │               ├── side-menu.component.scss
│   │               ├── side-menu.component.spec.ts
│   │               ├── side-menu.component.ts
│   │               └── sideMenuModule.ts
│   ├── application
│   │   ├── guards
│   │   │   ├── auth
│   │   │   │   ├── auth.guard.ts
│   │   │   │   └── change-password.guard.ts
│   │   │   └── dashboard
│   │   ├── states
│   │   │   ├── actions
│   │   │   │   └── auth.actions.ts
│   │   │   ├── reducers
│   │   │   │   └── auth.reducer.ts
│   │   │   └── selectors
│   │   │       └── auth.selectors.ts
│   │   ├── tokens
│   │   └── usecases
│   ├── domain
│   │   ├── models
│   │   │   ├── constants
│   │   │   │   ├── auth
│   │   │   │   │   ├── auth.constants.ts
│   │   │   │   │   ├── changePassword.constants.ts
│   │   │   │   │   └── login.constants.ts
│   │   │   │   ├── components
│   │   │   │   │   ├── auth.constants.ts
│   │   │   │   │   ├── detail-content.constants.ts
│   │   │   │   │   ├── management-menu.constants.ts
│   │   │   │   │   ├── management-projects.constants.ts
│   │   │   │   │   ├── planing.constants.ts
│   │   │   │   │   └── projects.constants.ts
│   │   │   │   ├── mocks
│   │   │   │   │   └── simulateServices.constants.ts
│   │   │   │   ├── paths
│   │   │   │   │   └── titleGroup.constants.ts
│   │   │   │   ├── shared
│   │   │   │   │   ├── app.constants.ts
│   │   │   │   │   ├── icons-images.constants.ts
│   │   │   │   │   ├── loader.constants.ts
│   │   │   │   │   ├── paths.constants.ts
│   │   │   │   │   ├── regex.constants.ts
│   │   │   │   │   ├── storage.constants.ts
│   │   │   │   │   └── viewMore.constants.ts
│   │   │   │   ├── sideBar
│   │   │   │   │   └── side-bar.constants.ts
│   │   │   │   ├── state
│   │   │   │   │   ├── app.reducer.constants.ts
│   │   │   │   │   └── auth.constants.ts
│   │   │   │   ├── tokens.constants.ts
│   │   │   │   └── types
│   │   │   │       ├── actions.types.ts
│   │   │   │       ├── auth.types.ts
│   │   │   │       ├── management.types.ts
│   │   │   │       ├── managementProjects.types.ts
│   │   │   │       ├── permission.types.ts
│   │   │   │       └── plans.types.ts
│   │   │   ├── enum
│   │   │   │   ├── changePassword
│   │   │   │   │   └── progress-bar.enum.ts
│   │   │   │   └── login
│   │   │   ├── interfaces
│   │   │   │   ├── actionsState.interface.ts
│   │   │   │   ├── detail-content.interface.ts
│   │   │   │   ├── planning.interface.ts
│   │   │   │   ├── progressbar.interface.ts
│   │   │   │   ├── projectManagement.interface.ts
│   │   │   │   ├── requirementPasswor.interface.ts
│   │   │   │   ├── state
│   │   │   │   │   └── app.interface.ts
│   │   │   │   └── userAuth.interface.ts
│   │   │   └── stateModel
│   │   │       └── auth.model.ts
│   │   └── usecases
│   │       ├── PlanningUseCases.abstract.ts
│   │       ├── UserAuthUseCases.abstract.ts
│   │       ├── generalUseCases.abstract.ts
│   │       └── projectManagementUseCases.ts
│   └── infrastructure
│       ├── api
│       │   └── api.service.ts
│       ├── interceptors
│       │   ├── error-handling.interceptor.ts
│       │   ├── headers.interceptor.ts
│       │   └── loader.interceptor.ts
│       ├── repositories
│       │   ├── general-repository.service.ts
│       │   ├── planning-repository.service.ts
│       │   ├── projects-repository.service.ts
│       │   └── user-auth-repository.service.ts
│       └── services
│           ├── auth-service.service.ts
│           ├── general-service.service.ts
│           ├── planningService.service.ts
│           └── project-service.service.ts
├── environment
│   ├── environment.prod.ts
│   └── environment.ts
└── shared
    ├── assets
    │   ├── fonts
    │   │   ├── NunitoSans-Italic-VariableFont_YTLC,opsz,wdth,wght.ttf
    │   │   └── NunitoSans-VariableFont_YTLC,opsz,wdth,wght.ttf
    │   ├── img
    │   │   ├── png
    │   │   │   ├── Culturas@2x.png
    │   │   │   ├── LogoSIM.png
    │   │   │   ├── LogoSIM@2x.png
    │   │   │   ├── Logo_Colombia_Potencia_De_Vida.png
    │   │   │   ├── Logo_Colombia_Potencia_De_Vida@2x.png
    │   │   │   ├── card
    │   │   │   │   ├── administracion.png
    │   │   │   │   ├── administracion2.png
    │   │   │   │   ├── crm.png
    │   │   │   │   ├── crm2.png
    │   │   │   │   ├── planeacion.png
    │   │   │   │   ├── planeacion2.png
    │   │   │   │   ├── serviciosReserva.png
    │   │   │   │   ├── serviciosReserva2.png
    │   │   │   │   ├── taquilla.png
    │   │   │   │   └── taquilla2.png
    │   │   │   ├── cards
    │   │   │   │   ├── administracion.jpg
    │   │   │   │   ├── crm.jpg
    │   │   │   │   ├── planeacion.jpg
    │   │   │   │   ├── planeacion1.jpg
    │   │   │   │   ├── serviciosReservas.jpg
    │   │   │   │   └── taquilla.jpg
    │   │   │   ├── culturas.png
    │   │   │   └── museoJuanCorral.png
    │   │   └── svg
    │   │       ├── carrousel
    │   │       │   ├── AntonGarciadeBonilla.svg
    │   │       │   ├── Casadelflorero.svg
    │   │       │   ├── Convension.svg
    │   │       │   ├── GeneralSantander.svg
    │   │       │   ├── GuillermoLeonValencia.svg
    │   │       │   ├── Juandelcorral.svg
    │   │       │   ├── MuseoAlfonsoLopezPumarejo.svg
    │   │       │   ├── MuseoAntonioNarinoAlvarez.svg
    │   │       │   ├── RafaelNunez.svg
    │   │       │   ├── mnc.svg
    │   │       │   ├── sm_antonGarciadeBonilla.png
    │   │       │   ├── sm_casadelflorero.png
    │   │       │   ├── sm_convension.png
    │   │       │   ├── sm_generalSantander.png
    │   │       │   ├── sm_guillermoLeonValencia.png
    │   │       │   ├── sm_juandelcorral.png
    │   │       │   ├── sm_mnc.png
    │   │       │   ├── sm_museoAlfonsoLopezPumarejo.png
    │   │       │   ├── sm_museoAntonioNarinoAlvarez.png
    │   │       │   └── sm_rafaelNunez.png
    │   │       ├── icons
    │   │       │   ├── Add.svg
    │   │       │   ├── Attachment.svg
    │   │       │   ├── Backward arrow small.svg
    │   │       │   ├── Backward arrow.svg
    │   │       │   ├── Bag.svg
    │   │       │   ├── Boleta.svg
    │   │       │   ├── Down arrow.svg
    │   │       │   ├── DownArrowSmall.svg
    │   │       │   ├── Evento.svg
    │   │       │   ├── Export.svg
    │   │       │   ├── Facebook.svg
    │   │       │   ├── Forward arrow small.svg
    │   │       │   ├── Forward arrow.svg
    │   │       │   ├── GestionProyectos.svg
    │   │       │   ├── Google plus.svg
    │   │       │   ├── Information.svg
    │   │       │   ├── Informes.svg
    │   │       │   ├── Instagram.svg
    │   │       │   ├── Inventario.svg
    │   │       │   ├── Items menú lateral.svg
    │   │       │   ├── Menu.svg
    │   │       │   ├── Merge.svg
    │   │       │   ├── Options.svg
    │   │       │   ├── Pause.svg
    │   │       │   ├── PlanificarEstrategia.svg
    │   │       │   ├── Rectangle 1072.svg
    │   │       │   ├── Reporte.svg
    │   │       │   ├── Roles y perfiles.svg
    │   │       │   ├── SIMSideBar.svg
    │   │       │   ├── Search.svg
    │   │       │   ├── Servicio.svg
    │   │       │   ├── Skip next.svg
    │   │       │   ├── Skip previous.svg
    │   │       │   ├── Taquilla.svg
    │   │       │   ├── Twitter-1.svg
    │   │       │   ├── Twitter.svg
    │   │       │   ├── Up arrow.svg
    │   │       │   ├── UpArrowSmall.svg
    │   │       │   ├── Usuarios.svg
    │   │       │   ├── Web.svg
    │   │       │   ├── admin.svg
    │   │       │   ├── alert.svg
    │   │       │   ├── anguloDown.svg
    │   │       │   ├── anguloLeft.svg
    │   │       │   ├── anguloRight.svg
    │   │       │   ├── anguloUp.svg
    │   │       │   ├── check.svg
    │   │       │   ├── close.svg
    │   │       │   ├── closeEye.svg
    │   │       │   ├── correcto.svg
    │   │       │   ├── delete.svg
    │   │       │   ├── download.svg
    │   │       │   ├── editar.svg
    │   │       │   ├── filter.svg
    │   │       │   ├── hogar.svg
    │   │       │   ├── mensajes.svg
    │   │       │   ├── notificación.svg
    │   │       │   ├── openEye.svg
    │   │       │   ├── point.svg
    │   │       │   ├── reserva.svg
    │   │       │   ├── simSideBarIcon.svg
    │   │       │   ├── userProfile.svg
    │   │       │   └── whitoutData.svg
    │   │       └── img
    │   │           ├── error.svg
    │   │           ├── inactivity.svg
    │   │           ├── login.svg
    │   │           ├── logoInit.svg
    │   │           ├── sideBar2.svg
    │   │           └── sidebar.svg
    │   ├── resources
    │   │   ├── animations
    │   │   └── i18n
    │   │       ├── en.json
    │   │       └── es.json
    │   └── templates
    │       └── template.xlsx
    ├── components
    │   ├── detai-content-pestanas
    │   │   ├── detail-content-pestanas.component.html
    │   │   ├── detail-content-pestanas.component.scss
    │   │   ├── detail-content-pestanas.component.spec.ts
    │   │   ├── detail-content-pestanas.component.ts
    │   │   └── detailContentPestanas.modules.ts
    │   ├── empty-component
    │   │   ├── empty-component.component.html
    │   │   ├── empty-component.component.scss
    │   │   ├── empty-component.component.spec.ts
    │   │   └── empty-component.component.ts
    │   ├── footer
    │   ├── header
    │   │   ├── header.component.html
    │   │   ├── header.component.scss
    │   │   ├── header.component.spec.ts
    │   │   └── header.component.ts
    │   ├── loader
    │   │   ├── loader.component.html
    │   │   ├── loader.component.scss
    │   │   ├── loader.component.spec.ts
    │   │   └── loader.component.ts
    │   ├── management-menu
    │   │   ├── mamagementMenuModule.ts
    │   │   ├── management-menu.component.html
    │   │   ├── management-menu.component.scss
    │   │   ├── management-menu.component.spec.ts
    │   │   └── management-menu.component.ts
    │   ├── modals
    │   │   ├── confirm-action-modal
    │   │   │   ├── confirm-action-modal.component.html
    │   │   │   ├── confirm-action-modal.component.scss
    │   │   │   ├── confirm-action-modal.component.spec.ts
    │   │   │   └── confirm-action-modal.component.ts
    │   │   ├── confirm-modal
    │   │   │   ├── confirm-modal.component.html
    │   │   │   ├── confirm-modal.component.scss
    │   │   │   ├── confirm-modal.component.spec.ts
    │   │   │   └── confirm-modal.component.ts
    │   │   ├── error-modal
    │   │   │   ├── error-modal.component.html
    │   │   │   ├── error-modal.component.scss
    │   │   │   ├── error-modal.component.spec.ts
    │   │   │   └── error-modal.component.ts
    │   │   └── inactivity-modal
    │   │       └── inactivity-modal
    │   │           ├── inactivity-modal.component.html
    │   │           ├── inactivity-modal.component.scss
    │   │           ├── inactivity-modal.component.spec.ts
    │   │           └── inactivity-modal.component.ts
    │   └── multiselect-checkbox
    │       ├── multiselect-checkbox.component.html
    │       ├── multiselect-checkbox.component.scss
    │       ├── multiselect-checkbox.component.spec.ts
    │       └── multiselect-checkbox.component.ts
    ├── directives
    │   ├── close-outside.directive.ts
    │   ├── currency-format-directive.directive.ts
    │   ├── no-starting-spaces.directive.ts
    │   ├── not-finish-spaces.directive.ts
    │   └── permission.directive.ts
    ├── models
    │   ├── constants
    │   │   ├── general-service
    │   │   │   └── inactivity.constants.ts
    │   │   └── regex
    │   │       └── regex.constants.ts
    │   ├── interfaces
    │   │   └── permission-action.interface.ts
    │   └── translations
    │       ├── app.load.lang.ts
    │       └── ngx-translate.module.ts
    ├── pipes
    │   ├── capitalize-first-pipe.pipe.ts
    │   └── currency-format.pipe.ts
    ├── security
    │   ├── module
    │   └── storage
    │       └── secure-storage.service.ts
    ├── services
    │   ├── error-handle
    │   │   ├── error-handle.service.spec.ts
    │   │   └── error-handle.service.ts
    │   ├── inactivity-service
    │   │   ├── inactivity.service.spec.ts
    │   │   └── inactivity.service.ts
    │   ├── loader
    │   │   ├── loader.service.spec.ts
    │   │   └── loader.service.ts
    │   └── permission-action
    │       ├── permission.service.spec.ts
    │       └── permission.service.ts
    └── styles
        ├── _buttons.scss
        ├── _colors.scss
        └── _texts.scss
             # Museum
