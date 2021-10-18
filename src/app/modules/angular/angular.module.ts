import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular.component';
import { AngularRoutingModule } from './angular-routing.module';
import { ComponentSectionComponent } from './component-section/component-section.component';
import { NgMaterialModule } from '../ng-material';



@NgModule({
  declarations: [
    AngularComponent,
    ComponentSectionComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    NgMaterialModule
  ]
})
export class AngularModule { }
