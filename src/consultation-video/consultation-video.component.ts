import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-consultation-video',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './consultation-video.component.html',
  styleUrl: './consultation-video.component.css',
})
export class ConsultationVideoComponent implements OnInit {
  consultationId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.consultationId = +params.get('id')!;
      // You can now use this.consultationId to fetch consultation details from localStorage or an API
    });
  }
}
