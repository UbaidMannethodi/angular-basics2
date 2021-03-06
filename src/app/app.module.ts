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
import { NoPageComponent } from './no-page/no-page.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component' ;
import { HttpClientModule } from '@angular/common/http';
import { UserApiComponent } from './user-api/user-api.component';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { GrouproutingpageComponent } from './grouproutingpage/grouproutingpage.component';

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
    NoPageComponent,
    AboutMeComponent,
    AboutCompanyComponent,
    AboutComponent,
    FooterComponent,
    UserApiComponent,
    GrouproutingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AdminModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
