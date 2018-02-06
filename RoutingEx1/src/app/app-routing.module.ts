import { NgModule } from '@angular/core';
import { Child1Component } from './child1/child1.component';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'child1', component: Child1Component }
  { path: '', redirectTo: '/', pathMatch: 'full' }
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes,
              {enableTracing: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
