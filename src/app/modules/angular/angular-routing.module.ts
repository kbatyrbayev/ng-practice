import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularComponent } from './angular.component';
import {ComponentSectionComponent} from "./component-section/component-section.component";


const routes: Routes = [
  {
    path: '',
    component: AngularComponent,
    children:[
      {
        path: 'components',
        component: ComponentSectionComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
