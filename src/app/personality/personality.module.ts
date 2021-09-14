import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';

import { PersonalityRoutingModule } from './personality-routing.module';
import { PersonalityComponent } from './personality.component';
import { ResultsComponent } from './results/results.component';
import { QuizDialogComponent } from './quiz-dialog/quiz-dialog.component';

@NgModule({
  declarations: [
    PersonalityComponent,
    ResultsComponent,
    QuizDialogComponent
  ],
  imports: [
    CommonModule,
    PersonalityRoutingModule,
    FormsModule,
    
    MatDialogModule,
    MatStepperModule,
    MatRadioModule
  ],
  entryComponents: [
    QuizDialogComponent
  ]
})
export class PersonalityModule { }
