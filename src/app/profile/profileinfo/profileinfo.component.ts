import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profileinfo',
  standalone: true,
  imports: [],
  templateUrl: './profileinfo.component.html',
  styleUrl: './profileinfo.component.css'
})
export class ProfileinfoComponent {
  constructor(private router: Router) {}

  navegarParaEditProfile () {
    console.log("Ir para Editar Perfil");
    this.router.navigate(['/editprofile']);
  }
}