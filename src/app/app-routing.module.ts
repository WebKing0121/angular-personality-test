import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'personality', pathMatch: 'full' },
  {
    path: 'personality', loadChildren: () => import('./personality/personality.module').then(m => m.PersonalityModule)
  },
  { path: '**', redirectTo: 'personality' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
