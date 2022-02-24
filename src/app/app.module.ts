import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectionComponent } from './direction/direction.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { DepartementComponent } from './departement/departement.component';
import { FonctionComponent } from './fonction/fonction.component';
import { PersonnelPosteComponent } from './personnel-poste/personnel-poste.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectionComponent,
    PersonnelComponent,
    DepartementComponent,
    FonctionComponent,
    PersonnelPosteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
