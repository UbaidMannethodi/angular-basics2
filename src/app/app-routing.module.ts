import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ChildComponent } from './child/child.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'child', component: ChildComponent},
  {path:'basic-form', component: BasicFormComponent},
  {path:'todo', component: TodoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
