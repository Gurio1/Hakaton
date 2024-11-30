import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-consultation-video',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './consultation-video.component.html',
  styleUrl: './consultation-video.component.css',
})
export class ConsultationVideoComponent {
  constructor(private router: Router) {}
}
