import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainServiceService } from './service//main-service.service';
import {  FormGroup , ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppBarComponent } from './app-bar/app-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { RegistrationComponent } from './registration/registration.component';
import { DailyCareComponent } from './daily-care/daily-care.component';
import { LoginComponent } from './login/login.component';
import { InPatientServiceService } from './service/in-patient-service.service';
import { InPatientPostServiceService } from './service/in-patient-post-service.service';


@NgModule({
  declarations: [
    AppComponent,
    AppBarComponent,
    FooterComponent,
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
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: AppComponent},
      {path: 'registration', component: RegistrationComponent},
      {path: 'dailycare', component: DailyCareComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'login', component: LoginComponent}
    ])
  ],
  providers: [MainServiceService,
            InPatientServiceService,
          InPatientPostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
