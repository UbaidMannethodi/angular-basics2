import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './about/about.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ChildComponent } from './child/child.component';
import { GrouproutingpageComponent } from './grouproutingpage/grouproutingpage.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TodoComponent } from './todo/todo.component';
import { UserApiComponent } from './user-api/user-api.component';

const routes: Routes = [
  { path: 'child', component: ChildComponent },
  { path: 'basic-form', component: BasicFormComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'template-driven-form', component: TemplateDrivenFormComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  // about
  {
    path: 'about', component: AboutComponent,
    children: [
      { path: 'about-me', component: AboutMeComponent },
      { path: 'about-company', component: AboutCompanyComponent }

    ]
  },
  { path: 'user-api', component: UserApiComponent },
  { path: 'group-routing', component: GrouproutingpageComponent },
  // lazy loading
  {path: 'lazy-loading',loadChildren:()=>import('./lazy/lazy.module').then(mod=>mod.LazyModule)}
  // 404 component
  // { path: '**', component: NoPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
