import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainServiceService } from './main-service.service';
import {  FormGroup , ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyformComponent } from './bodyform/bodyform.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './registration/registration.component';
import { DailyCareComponent } from './daily-care/daily-care.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    FooterComponent,
    BodyformComponent,
    AdminComponent,
    RegistrationComponent,
    DailyCareComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatIconModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'dailycare', component: DailyCareComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'login', component: LoginComponent}
    ])


  ],
  providers: [MainServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
