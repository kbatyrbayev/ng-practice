import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './common-components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'angular',
    loadChildren: () => import('./modules/angular/angular.module').then(m => m.AngularModule)
  },
  {
    path: 'typescript',
    loadChildren: () => import('./modules/type-script/type-script.module').then(m => m.TypeScriptModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
