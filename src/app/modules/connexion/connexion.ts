import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './connexion.html',
  styleUrl: './connexion.css',
})
export class ConnexionComponent implements OnInit {
  societes: any[] = [];
  selectedSociete: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // TODO: call API YCPY ici plus tard
    this.societes = [];
  }

  //close button (X)
  close() {
    this.router.navigate(['/home']);
  }

  //annuler button
  cancel() {
    this.router.navigate(['/home']);
  }

  // ✅ validation société
  validate() {
    if (!this.selectedSociete) {
      alert('Veuillez sélectionner une société');
      return;
    }

    console.log('Société sélectionnée:', this.selectedSociete);

    // 👉 plus tard: stocker en session / localStorage
    localStorage.setItem('societe', this.selectedSociete);

    this.router.navigate(['/home']);
  }
}
