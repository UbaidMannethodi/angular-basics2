import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { TodoComponent } from './todo/todo.component';
import { ChildComponent } from './child/child.component';
import { ChildToParantComponent } from './child-to-parant/child-to-parant.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe' ;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicFormComponent,
    TodoComponent,
    ChildComponent,
    ChildToParantComponent,
    UsdInrPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
