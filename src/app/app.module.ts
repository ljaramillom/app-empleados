import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddEditEmployerComponent } from './components/add-edit-employer/add-edit-employer.component';
import { ListEmployerComponent } from './components/list-employer/list-employer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MsgConfirmationComponent } from './components/shared/msg-confirmation/msg-confirmation.component';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddEditEmployerComponent,
    ListEmployerComponent,
    NavbarComponent,
    MsgConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
