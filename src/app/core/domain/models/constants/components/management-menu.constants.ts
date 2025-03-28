import { Type } from '@angular/core';
import { CollaborationProjectsComponent } from '@pages/dash-board/components/planning/manage-projects/components/collaboration-projects/collaboration-projects.component';
import { EvaluationProjectsComponent } from '@pages/dash-board/components/planning/manage-projects/components/evaluation-projects/evaluation-projects.component';
import { ProjectsComponent } from '@pages/dash-board/components/planning/manage-projects/components/projects-general/projects.component';
import { IndicatorsComponent } from '@pages/dash-board/components/planning/planning-strategies/components/indicators/indicators.component';
import { StrategicGuidelinesComponent } from '@pages/dash-board/components/planning/planning-strategies/components/strategic-guidelines/strategic-guidelines.component';
import { StrategicPlansComponent } from '@pages/dash-board/components/planning/planning-strategies/components/strategic-plans/strategic-plans.component';

export const STRATEGIC_PLAN_MENU: { [key: string]: Type<any> } = {
  'Lineamientos Estratégicos': StrategicGuidelinesComponent,
  'Planes Estratégicos': StrategicPlansComponent,
  'Indicadores': IndicatorsComponent,
};

export const MANAGEMENT_PROYECTS_MENU: { [key: string]: Type<any> } = {
  'Proyectos': ProjectsComponent,
  'Evaluación de Proyectos': EvaluationProjectsComponent,
  'Proyectos en colaboración': CollaborationProjectsComponent,
};
