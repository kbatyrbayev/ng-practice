import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsComponent } from './js.component';
import { JsRoutingModule } from './js-routing.module';
import { Section2Component } from './sections/section2.component';
import { Section1Component } from './sections/section1/section1.component';



@NgModule({
  declarations: [
    JsComponent,
    Section1Component,
    Section2Component,
  ],
  imports: [
    CommonModule,
    JsRoutingModule,
  ]
})
export class JsModule { }
