import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from '../services/LoginService';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  currentUser: string | null = null;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {
    // Subscribe to the current user observable to update the navbar
    this.loginService.currentUser$.subscribe((username) => {
      console.log('Here');
      this.currentUser = username;
    });
  }
}
