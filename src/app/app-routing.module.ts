import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ChildComponent } from './child/child.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'child', component: ChildComponent},
  {path:'basic-form', component: BasicFormComponent},
  {path:'todo', component: TodoComponent},
  {path:'template-driven-form', component: TemplateDrivenFormComponent},
  {path:'reactive-form', component:ReactiveFormComponent},
  {path:'**', component:NoPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
