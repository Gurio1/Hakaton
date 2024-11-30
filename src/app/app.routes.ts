import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { ConsultationsComponent } from '../consultations/consultations.component';
import { ConsultationVideoComponent } from '../consultation-video/consultation-video.component';
import { AboutComponent } from '../about/about.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'consultations', component: ConsultationsComponent },
  { path: 'videoConsultation', component: ConsultationVideoComponent },
  { path: 'about', component: AboutComponent },
];
