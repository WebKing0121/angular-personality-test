import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalityComponent } from './personality.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: '', component: PersonalityComponent },
  { path: 'results', component: ResultsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalityRoutingModule { }
