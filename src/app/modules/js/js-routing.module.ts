import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { JsComponent } from "./js.component";
import { Section1Component } from "./sections/section1/section1.component";
import { Section2Component } from "./sections/section2.component";

const routes: Routes = [
  {
    path: '',
    component: JsComponent,
    children: [
      { path: 'section-1', component: Section1Component },
      { path: 'section-2', component: Section2Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsRoutingModule {
}