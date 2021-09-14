import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personality } from '../../personality';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['../styles.scss', './results.component.scss']
})
export class ResultsComponent {
  Personality = Personality;

  result: Personality;

  constructor(
    router: Router,
    route: ActivatedRoute
  ) {
    if (!route.snapshot.queryParams.hasOwnProperty('personality')) {
      router.navigateByUrl('/personality');
    }

    this.result = route.snapshot.queryParams['personality'];
  }

}
