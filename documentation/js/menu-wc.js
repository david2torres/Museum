'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">sim documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/NgxTranslateModule.html" data-type="entity-link" >NgxTranslateModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#components-links"' :
                            'data-bs-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AppComponent.html" data-type="entity-link" >AppComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/AuthComponent.html" data-type="entity-link" >AuthComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ChangePasswordComponent.html" data-type="entity-link" >ChangePasswordComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CollaborationProjectsComponent.html" data-type="entity-link" >CollaborationProjectsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfirmActionModalComponent.html" data-type="entity-link" >ConfirmActionModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ConfirmModalComponent.html" data-type="entity-link" >ConfirmModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateProductComponent.html" data-type="entity-link" >CreateProductComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/CreateProjectModalComponent.html" data-type="entity-link" >CreateProjectModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DashBoardComponent.html" data-type="entity-link" >DashBoardComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DetailContentPestanasComponent.html" data-type="entity-link" >DetailContentPestanasComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/DownloadReportsComponent.html" data-type="entity-link" >DownloadReportsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EmptyComponentComponent.html" data-type="entity-link" >EmptyComponentComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EntitiesComponent.html" data-type="entity-link" >EntitiesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ErrorModalComponent.html" data-type="entity-link" >ErrorModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/EvaluationProjectsComponent.html" data-type="entity-link" >EvaluationProjectsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GeneralManagementComponent.html" data-type="entity-link" >GeneralManagementComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/GuidelinesModalComponent.html" data-type="entity-link" >GuidelinesModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HeaderComponent.html" data-type="entity-link" >HeaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/HomeComponent.html" data-type="entity-link" >HomeComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/InactivityModalComponent.html" data-type="entity-link" >InactivityModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IndicatorsComponent.html" data-type="entity-link" >IndicatorsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/IndicatorsModalComponent.html" data-type="entity-link" >IndicatorsModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoaderComponent.html" data-type="entity-link" >LoaderComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/LoginComponent.html" data-type="entity-link" >LoginComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ManagementMenuComponent.html" data-type="entity-link" >ManagementMenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ManageProjectsComponent.html" data-type="entity-link" >ManageProjectsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MonitoringProjectComponent.html" data-type="entity-link" >MonitoringProjectComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/MultiselectCheckboxComponent.html" data-type="entity-link" >MultiselectCheckboxComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlanningStrategiesComponent.html" data-type="entity-link" >PlanningStrategiesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/PlansModalComponent.html" data-type="entity-link" >PlansModalComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ProjectsComponent.html" data-type="entity-link" >ProjectsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ReportsPlaningComponent.html" data-type="entity-link" >ReportsPlaningComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/ResetLinkComponent.html" data-type="entity-link" >ResetLinkComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/SideMenuComponent.html" data-type="entity-link" >SideMenuComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StrategicGuidelinesComponent.html" data-type="entity-link" >StrategicGuidelinesComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/StrategicPlansComponent.html" data-type="entity-link" >StrategicPlansComponent</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#directives-links"' :
                                'data-bs-target="#xs-directives-links"' }>
                                <span class="icon ion-md-code-working"></span>
                                <span>Directives</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="directives-links"' : 'id="xs-directives-links"' }>
                                <li class="link">
                                    <a href="directives/CloseOutsideDirective.html" data-type="entity-link" >CloseOutsideDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/CurrencyFormatDirective.html" data-type="entity-link" >CurrencyFormatDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NoInitSpacesDirective.html" data-type="entity-link" >NoInitSpacesDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/NotFinishSpacesDirective.html" data-type="entity-link" >NotFinishSpacesDirective</a>
                                </li>
                                <li class="link">
                                    <a href="directives/PermissionDirective.html" data-type="entity-link" >PermissionDirective</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AbstractPlanningUseCases.html" data-type="entity-link" >AbstractPlanningUseCases</a>
                            </li>
                            <li class="link">
                                <a href="classes/AbstractProjectsMangement.html" data-type="entity-link" >AbstractProjectsMangement</a>
                            </li>
                            <li class="link">
                                <a href="classes/AbstractsGeneralUseCases.html" data-type="entity-link" >AbstractsGeneralUseCases</a>
                            </li>
                            <li class="link">
                                <a href="classes/AbstractUserAuthUseCases.html" data-type="entity-link" >AbstractUserAuthUseCases</a>
                            </li>
                            <li class="link">
                                <a href="classes/Auth_Model.html" data-type="entity-link" >Auth_Model</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorHandleService.html" data-type="entity-link" >ErrorHandleService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeneralRepository.html" data-type="entity-link" >GeneralRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GeneralService.html" data-type="entity-link" >GeneralService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InactivityService.html" data-type="entity-link" >InactivityService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoaderService.html" data-type="entity-link" >LoaderService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionService.html" data-type="entity-link" >PermissionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlanningRepository.html" data-type="entity-link" >PlanningRepository</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PlanningService.html" data-type="entity-link" >PlanningService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectServiceService.html" data-type="entity-link" >ProjectServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ProjectsRepositoryService.html" data-type="entity-link" >ProjectsRepositoryService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SecureStorageService.html" data-type="entity-link" >SecureStorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserAuthRepository.html" data-type="entity-link" >UserAuthRepository</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/ErrorHandlingInterceptor.html" data-type="entity-link" >ErrorHandlingInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/HeadersInterceptor.html" data-type="entity-link" >HeadersInterceptor</a>
                            </li>
                            <li class="link">
                                <a href="interceptors/LoaderInterceptor.html" data-type="entity-link" >LoaderInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Acciones.html" data-type="entity-link" >Acciones</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccionIndicadore.html" data-type="entity-link" >AccionIndicadore</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AccionIndicadore-1.html" data-type="entity-link" >AccionIndicadore</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Aliado.html" data-type="entity-link" >Aliado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/AreaResponsable.html" data-type="entity-link" >AreaResponsable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Comunidade.html" data-type="entity-link" >Comunidade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EjeEstrategicoEvaluadore.html" data-type="entity-link" >EjeEstrategicoEvaluadore</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EjeEstrategicoLineamientoEstrategico.html" data-type="entity-link" >EjeEstrategicoLineamientoEstrategico</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/EjesEstrategico.html" data-type="entity-link" >EjesEstrategico</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Entidade.html" data-type="entity-link" >Entidade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/entidadRolesFuncionalidad.html" data-type="entity-link" >entidadRolesFuncionalidad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Error.html" data-type="entity-link" >Error</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Estado.html" data-type="entity-link" >Estado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Evaluador.html" data-type="entity-link" >Evaluador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Funcionalidade.html" data-type="entity-link" >Funcionalidade</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Headers.html" data-type="entity-link" >Headers</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAcciones.html" data-type="entity-link" >IAcciones</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAction_Auth.html" data-type="entity-link" >IAction_Auth</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAction_Menu.html" data-type="entity-link" >IAction_Menu</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAliado.html" data-type="entity-link" >IAliado</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAliados.html" data-type="entity-link" >IAliados</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAppState.html" data-type="entity-link" >IAppState</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAreasPorMuseo.html" data-type="entity-link" >IAreasPorMuseo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAreaUser.html" data-type="entity-link" >IAreaUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuth_State.html" data-type="entity-link" >IAuth_State</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IAuthError.html" data-type="entity-link" >IAuthError</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICategories.html" data-type="entity-link" >ICategories</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICeateGuidelinesResponse.html" data-type="entity-link" >ICeateGuidelinesResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IChangePassword.html" data-type="entity-link" >IChangePassword</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICiudadMunicipio.html" data-type="entity-link" >ICiudadMunicipio</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IComunidad.html" data-type="entity-link" >IComunidad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IComunidades.html" data-type="entity-link" >IComunidades</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IConfirmActionModal.html" data-type="entity-link" >IConfirmActionModal</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICreateProductsComponent.html" data-type="entity-link" >ICreateProductsComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICreateProject.html" data-type="entity-link" >ICreateProject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICreateRubro.html" data-type="entity-link" >ICreateRubro</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ICreateStrategicPlans.html" data-type="entity-link" >ICreateStrategicPlans</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDepartamentos.html" data-type="entity-link" >IDepartamentos</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDynamicAction.html" data-type="entity-link" >IDynamicAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDynamicGuideline.html" data-type="entity-link" >IDynamicGuideline</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDynamicIndicator.html" data-type="entity-link" >IDynamicIndicator</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDynamicListPorjects.html" data-type="entity-link" >IDynamicListPorjects</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEditEjeEstrategico.html" data-type="entity-link" >IEditEjeEstrategico</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEditGuidelineResponse.html" data-type="entity-link" >IEditGuidelineResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEjesEstrategico.html" data-type="entity-link" >IEjesEstrategico</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEmmitrAction.html" data-type="entity-link" >IEmmitrAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEntidad.html" data-type="entity-link" >IEntidad</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEstadosProyectos.html" data-type="entity-link" >IEstadosProyectos</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEvaluadoresResponse.html" data-type="entity-link" >IEvaluadoresResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IEvaluatorList.html" data-type="entity-link" >IEvaluatorList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IFilterType.html" data-type="entity-link" >IFilterType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGenericList.html" data-type="entity-link" >IGenericList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGetGuidelinesResponse.html" data-type="entity-link" >IGetGuidelinesResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGrupoEtario.html" data-type="entity-link" >IGrupoEtario</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IGuidelineList.html" data-type="entity-link" >IGuidelineList</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IIndicador.html" data-type="entity-link" >IIndicador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IIndicadoresResponse.html" data-type="entity-link" >IIndicadoresResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IMes.html" data-type="entity-link" >IMes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IModalEdit.html" data-type="entity-link" >IModalEdit</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IModalEditEje.html" data-type="entity-link" >IModalEditEje</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IModalNewProject.html" data-type="entity-link" >IModalNewProject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IModulo.html" data-type="entity-link" >IModulo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Indicadore.html" data-type="entity-link" >Indicadore</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Indicadores.html" data-type="entity-link" >Indicadores</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Indicadores-1.html" data-type="entity-link" >Indicadores</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IOPTION_VIEW.html" data-type="entity-link" >IOPTION_VIEW</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPermissionAction.html" data-type="entity-link" >IPermissionAction</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPestanas.html" data-type="entity-link" >IPestanas</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPolitica.html" data-type="entity-link" >IPolitica</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPoliticasResponse.html" data-type="entity-link" >IPoliticasResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IPresupuesto.html" data-type="entity-link" >IPresupuesto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProducto.html" data-type="entity-link" >IProducto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProductoProject.html" data-type="entity-link" >IProductoProject</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProgress_Key.html" data-type="entity-link" >IProgress_Key</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProgressBar.html" data-type="entity-link" >IProgressBar</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProjects.html" data-type="entity-link" >IProjects</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IProjectsComponent.html" data-type="entity-link" >IProjectsComponent</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IproyectosAsociados.html" data-type="entity-link" >IproyectosAsociados</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IRubro.html" data-type="entity-link" >IRubro</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISaveGuideLines.html" data-type="entity-link" >ISaveGuideLines</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISaveSeguimiento.html" data-type="entity-link" >ISaveSeguimiento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISeguimiento.html" data-type="entity-link" >ISeguimiento</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISeguimientoResponse.html" data-type="entity-link" >ISeguimientoResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStatusClassMap.html" data-type="entity-link" >IStatusClassMap</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStrategicPlansResponse.html" data-type="entity-link" >IStrategicPlansResponse</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IStylesProgress.html" data-type="entity-link" >IStylesProgress</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Item.html" data-type="entity-link" >Item</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITipoAporte.html" data-type="entity-link" >ITipoAporte</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITipoIndicador.html" data-type="entity-link" >ITipoIndicador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITipologias.html" data-type="entity-link" >ITipologias</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ITypeIndicatorsRequest.html" data-type="entity-link" >ITypeIndicatorsRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUnidadesMedida.html" data-type="entity-link" >IUnidadesMedida</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserChangePasswordRequest.html" data-type="entity-link" >IUserChangePasswordRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserLoginNormalize.html" data-type="entity-link" >IUserLoginNormalize</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserLoginRequest.html" data-type="entity-link" >IUserLoginRequest</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUserLoginRespone.html" data-type="entity-link" >IUserLoginRespone</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/LineamientosEstrategico.html" data-type="entity-link" >LineamientosEstrategico</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Mes.html" data-type="entity-link" >Mes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/NormalizedNames.html" data-type="entity-link" >NormalizedNames</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PasswordRequirement.html" data-type="entity-link" >PasswordRequirement</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Presupuesto.html" data-type="entity-link" >Presupuesto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PresupuestoTerno.html" data-type="entity-link" >PresupuestoTerno</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Proyecto.html" data-type="entity-link" >Proyecto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ProyectoPresupuesto.html" data-type="entity-link" >ProyectoPresupuesto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Rubro.html" data-type="entity-link" >Rubro</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/SeguimientoPresupuesto.html" data-type="entity-link" >SeguimientoPresupuesto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TipoIndicador.html" data-type="entity-link" >TipoIndicador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ValorExterno.html" data-type="entity-link" >ValorExterno</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#pipes-links"' :
                                'data-bs-target="#xs-pipes-links"' }>
                                <span class="icon ion-md-add"></span>
                                <span>Pipes</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="pipes-links"' : 'id="xs-pipes-links"' }>
                                <li class="link">
                                    <a href="pipes/CapitalizeFirstPipe.html" data-type="entity-link" >CapitalizeFirstPipe</a>
                                </li>
                                <li class="link">
                                    <a href="pipes/CurrencyFormatPipe.html" data-type="entity-link" >CurrencyFormatPipe</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});