import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  // templateUrl: './connexion.html',
  template: `
    <div class="container">
      <h2>Connexion</h2>

      <div class="form-group">
        <label>Société</label>
        <select [(ngModel)]="societeX3">
          <option value="">-- Sélectionner --</option>
          <option *ngFor="let s of societes" [value]="s.CPY">{{ s.CPY }} - {{ s.CPYNAM }}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Sage</label>
        <input [(ngModel)]="sage" />
      </div>

      <div class="form-group">
        <label>Société</label>
        <input [(ngModel)]="societeXRT" />
      </div>

      <button (click)="valider()">Valider</button>
    </div>
  `,
  styles: [
    `
      .container {
        width: 400px;
        margin: 60px auto;
        padding: 20px;
        border: 1px solid #ddd;
        border-radius: 6px;
      }

      .form-group {
        margin-bottom: 15px;
        display: flex;
        flex-direction: column;
      }

      input,
      select {
        padding: 8px;
        margin-top: 5px;
      }

      button {
        padding: 10px;
        width: 100%;
      }
    `,
  ],
})
export class ConnexionComponent implements OnInit {
  private http = inject(HttpClient);

  societes: any[] = [];

  societeX3 = '';
  sage = 'SEED';
  societeXRT = '';

  ngOnInit() {
    this.http.get<any>('/api/x3/societes').subscribe({
      next: (res) => {
        this.societes = res;
      },
      error: (err) => console.error(err),
    });
  }

  valider() {
    console.log({
      societeX3: this.societeX3,
      sage: this.sage,
      societeXRT: this.societeXRT,
    });
  }
}
