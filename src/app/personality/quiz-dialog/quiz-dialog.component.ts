import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { QueryItem } from '../../query-item';

interface DialogData {
  queries: QueryItem[];
}

interface QueryData {
  id: string;
  selected: number;
  value: number;
}

@Component({
  selector: 'app-quiz-dialog',
  templateUrl: './quiz-dialog.component.html',
  styleUrls: ['./quiz-dialog.component.scss']
})
export class QuizDialogComponent implements OnInit {
  queries: (QueryItem & { selected: number })[] = [];

  get queryData(): QueryData[] {
    return this.queries.map(({ id, selected, answers }) => ({
      id,
      selected,
      value: selected !== -1 ? answers[selected].value : -1
    }));
  }

  constructor(
    public dialogRef: MatDialogRef<QuizDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: DialogData
  ) { }

  ngOnInit(): void {
    this.queries = this.data.queries.map(q => ({
      ...q,
      selected: -1
    }));
  }

}
