import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { GEDComponent } from './pages/ged/ged.component';
import { TrombiComponent } from './pages/trombi/trombi.component';
import { ActualitesComponent } from './pages/actualites/actualites.component';

export const routes: Routes = [
  { path: '', component: LoginComponent }, // path: '/'
  { path: 'accueil', component: AccueilComponent },
  { path: 'ged', component: GEDComponent },
  { path: 'trombi', component: TrombiComponent },
  { path: 'actualites', component: ActualitesComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
