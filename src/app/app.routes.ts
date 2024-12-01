import { Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { ConsultationsComponent } from '../consultations/consultations.component';
import { ConsultationVideoComponent } from '../consultation-video/consultation-video.component';
import { AboutComponent } from '../about/about.component';
import { HealthAssessmentComponent } from '../health-assessment/health-assessment.component';
import { EnrolledConsultationsComponent } from '../enrolled-consultations/enrolled-consultations.component';
import { AuthGuardService } from '../services/authGuardService';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'consultations',
    component: ConsultationsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'videoConsultation/:id',
    component: ConsultationVideoComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuardService] },
  {
    path: 'health-assessment',
    component: HealthAssessmentComponent,
    canActivate: [AuthGuardService],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'enrolled-consultations',
    component: EnrolledConsultationsComponent,
    canActivate: [AuthGuardService],
  },
];
