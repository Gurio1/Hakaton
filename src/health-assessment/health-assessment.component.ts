import { Component } from '@angular/core';
import { QUESTIONS } from '../models/question'; // Import QUESTIONS from your model
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';
import { DOCTORS } from '../models/doctor';

@Component({
  selector: 'app-health-assessment',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './health-assessment.component.html',
  styleUrls: ['./health-assessment.component.css'],
})
export class HealthAssessmentComponent {
  questions = QUESTIONS;
  doctors = DOCTORS;
  answers = new Array(this.questions.length).fill(null);
  currentQuestionIndex = 0;
  showModal = false; // Track modal visibility
  suggestionMessage = ''; // Message for the modal
  consultationId = 0; // Message for the modal

  onAnswer(questionIndex: number, answer: string): void {
    this.answers[questionIndex] = answer;

    if (this.currentQuestionIndex < this.questions.length - 1) {
      setTimeout(() => {
        this.currentQuestionIndex++;
      }, 500);
    } else {
      this.generateSuggestion(); // Generate a suggestion once all questions are answered
    }
  }

  generateSuggestion(): void {
    if (this.answers[0] === 'General health check') {
      this.suggestionMessage = `Recommended Doctor: ${this.doctors[0].name} (${this.doctors[0].specialty})`;
    } else if (this.answers[0] === 'Skin issues') {
      this.suggestionMessage = `Recommended Doctor: ${this.doctors[1].name} (${this.doctors[1].specialty})`;
    } else if (this.answers[0] === 'Mental health') {
      this.suggestionMessage = `Recommended Doctor: ${this.doctors[2].name} (${this.doctors[2].specialty})`;
    } else if (this.answers[0] === 'Pain management') {
      this.suggestionMessage = `Recommended Doctor: ${this.doctors[3].name} (${this.doctors[3].specialty})`;
    }

    this.showModal = true; // Show modal with suggestion
  }

  closeModal(): void {
    this.showModal = false;
  }
}
