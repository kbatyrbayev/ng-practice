import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularComponent } from './angular.component';
import { AngularRoutingModule } from './angular-routing.module';
import { ComponentSectionComponent } from './sections/component-section.component';
import { NgMaterialModule } from '../ng-material';
import { Section2Component } from './sections/section2.component';
import {Section3Component} from "./sections/section3.component";

@NgModule({
  declarations: [
    AngularComponent,
    ComponentSectionComponent,
    Section2Component,
    Section3Component,
  ],
  imports: [CommonModule, AngularRoutingModule, NgMaterialModule],
})
export class AngularModule {}
