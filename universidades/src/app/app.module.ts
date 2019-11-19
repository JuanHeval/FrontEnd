import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacultadComponent } from './Universidad/facultad/facultad.component';
import { BloqueComponent } from './Universidad/bloque/bloque.component';
import { LaboratorioComponent } from './Universidad/laboratorio/laboratorio.component';
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    FacultadComponent,
    BloqueComponent,
    LaboratorioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
