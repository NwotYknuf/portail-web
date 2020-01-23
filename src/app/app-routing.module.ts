import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AccueilComponent } from './pages/accueil/accueil.component';


export const routes: Routes = [
  { path: '', component: LoginComponent }, // path: '/'
  { path: 'accueil', component: AccueilComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
