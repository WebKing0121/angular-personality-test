import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonalityService } from '../apis/personality.service';
import { Personality } from '../personality';
import { QueryItem } from '../query-item';
import { QuizDialogComponent } from './quiz-dialog/quiz-dialog.component';

@Component({
  selector: 'app-personality',
  templateUrl: './personality.component.html',
  styleUrls: ['./styles.scss', './personality.component.scss']
})
export class PersonalityComponent implements OnInit {
  queryData: QueryItem[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private apiService: PersonalityService
  ) { }

  ngOnInit(): void {
    this.queryData = this.apiService.getQueries();
  }

  startQuiz(): void {
    this.dialog
      .open(QuizDialogComponent, {
        width: '70%',
        data: { queries: this.queryData }
      })
      .afterClosed()
      .subscribe(res => {
        if (!!res) {
          const resData = res as { value: number }[];
          const score = resData.reduce((acc, current) => current.value / 4 + acc, 0);
          const percentage = score / resData.length * 100;

          /**
           * Here, I assumed that every answer (Radio Option on the quiz dialog) has rating that describes the level
           * of introvert/extrovert (0 - 4). Personality is decided based on the percentage which is calculated from
           * each selection. If the percentage is higher than 50%, it's extrovert. Otherwise, it's introvert. 
           */

          this.router.navigate(['results'], {
            relativeTo: this.route,
            queryParams: {
              personality: percentage > 50 ? Personality.Extrovert : Personality.Introvert
            }
          });
        }
      });
  }
}
