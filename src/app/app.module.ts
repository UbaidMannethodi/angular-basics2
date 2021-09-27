import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { TodoComponent } from './todo/todo.component';
import { ChildComponent } from './child/child.component';
import { ChildToParantComponent } from './child-to-parant/child-to-parant.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RedElDirective } from './red-el.directive';
import { NoPageComponent } from './no-page/no-page.component' ;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicFormComponent,
    TodoComponent,
    ChildComponent,
    ChildToParantComponent,
    UsdInrPipe,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    RedElDirective,
    NoPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
