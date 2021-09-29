import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';



@NgModule({
  declarations: [
    LoginComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginComponent,
    ListComponent
  ]
})
export class UserModuleModule { }
