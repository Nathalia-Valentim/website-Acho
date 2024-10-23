import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-editprofile',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './editprofile.component.html',
  styleUrl: './editprofile.component.css'
})
export class EditprofileComponent {
  constructor(private router: Router) {}

  navegarParaProfile () {
    console.log("Ir para Perfil");
    this.router.navigate(['/profile'])
  }
}
