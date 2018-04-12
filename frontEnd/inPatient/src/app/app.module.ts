import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainServiceService } from './main-service.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
    MatIconModule,
    NoopAnimationsModule,
  ],
  providers: [MainServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
