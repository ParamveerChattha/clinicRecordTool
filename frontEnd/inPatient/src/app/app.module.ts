import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MainServiceService} from './main-service.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MatMenuModule } from '@angular/material/menu';

import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyformComponent } from './bodyform/bodyform.component';
import { ButtonsComponent } from './buttons/buttons.component';


@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    FooterComponent,
    BodyformComponent,
    ButtonsComponent,
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    

  ],
  providers: [MainServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
