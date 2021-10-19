import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular.component';
import { ComponentSectionComponent } from './sections/component-section.component';
import { Section2Component } from './sections/section2.component';
import { Section3Component } from './sections/section3.component';

const routes: Routes = [
  {
    path: '',
    component: AngularComponent,
    children: [
      {
        path: 'components',
        component: ComponentSectionComponent,
      },
      {
        path: 'input-output',
        component: Section2Component,
      },
      {
        path: 'section-3',
        component: Section3Component,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularRoutingModule {}
