import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileinfoComponent } from './profileinfo/profileinfo.component';
import { EditprofileComponent } from './editprofile/editprofile.component';

const routes: Routes = [
  { path: 'profile', component: ProfileinfoComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
