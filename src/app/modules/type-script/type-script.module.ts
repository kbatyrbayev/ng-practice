import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeScriptComponent } from './type-script.component';
import { TypeScriptRoutingModule } from './type-script.routing.module';



@NgModule({
  declarations: [
    TypeScriptComponent,
  ],
  imports: [
    CommonModule,
    TypeScriptRoutingModule,
  ]
})
export class TypeScriptModule { }
