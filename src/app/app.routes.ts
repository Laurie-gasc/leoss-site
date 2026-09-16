import { Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AProposComponent } from './pages/a-propos/a-propos.component';
import { NosSolutionsComponent } from './pages/nos-solutions/nos-solutions.component';
import { RealisationsComponent } from './pages/realisations/realisations.component';
import { AvisClientsComponent } from './pages/avis-clients/avis-clients.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent, title: 'LEOSS - Solutions Énergétiques' },
  { path: 'a-propos', component: AProposComponent, title: 'À propos - LEOSS' },
  { path: 'nos-solutions', component: NosSolutionsComponent, title: 'Nos solutions - LEOSS' },
  { path: 'realisations', component: RealisationsComponent, title: 'Nos réalisations - LEOSS' },
  { path: 'avis-clients', component: AvisClientsComponent, title: 'Avis clients - LEOSS' },
  { path: 'contact', component: ContactComponent, title: 'Contact - LEOSS' },
  { path: '**', redirectTo: '' } // fallback si route inconnue
];