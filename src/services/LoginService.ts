import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', // Makes this service available throughout the app
})
export class LoginService {
  // Create a BehaviorSubject to track the current user's login state
  private currentUserSubject = new BehaviorSubject<string | null>(null);

  // Observable for the current user (so other components can subscribe)
  currentUser$ = this.currentUserSubject.asObservable();

  // Login function to set the current user
  login(username: string): void {
    this.currentUserSubject.next(username); // Set the logged-in user
  }
}
