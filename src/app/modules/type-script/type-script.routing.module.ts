import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeScriptComponent } from './type-script.component';


const routes: Routes = [
  {
    path: '',
    component: TypeScriptComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeScriptRoutingModule { }
