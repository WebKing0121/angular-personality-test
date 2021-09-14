import { Injectable } from '@angular/core';
import { QueryItem } from '../query-item';

@Injectable({
  providedIn: 'root'
})
export class PersonalityService {

  constructor() { }

  getQueries(): QueryItem[] {
    return [{
      id: 'q1',
      question: 'You\'re really busy at work and a collegue is telling you their life story and personal woes. You:',
      answers: [{
        text: 'Don\'t dare to interrupt them',
        value: 1
      }, {
        text: 'Think it\'s more important to give them some of your time; work can wait',
        value: 4
      }, {
        text: 'Listen, but with only half an ear',
        value: 2
      }, {
        text: 'Interrupt and explain that you are really busy at the moment',
        value: 0
      }]
    }, {
      id: 'q2',
      question: 'You\'ve been sitting in the doctor\'s waiting room for more than 25 minutes. You:',
      answers: [{
        text: 'Look at your watch every two minutes',
        value: 2
      }, {
        text: 'Bubble with inner anger, but keep quiet',
        value: 0
      }, {
        text: 'Explain to other equally impatient people in the room that the doctor is always running late',
        value: 4
      }, {
        text: 'Complain in a loud voice, while tapping your foot impatiently',
        value: 3
      }]
    }, {
      id: 'q3',
      question: 'You\'re having an animated discussion with a colleague regarding a project that you\'re in charge of. You:',
      answers: [{
        text: 'Don\'t dare contradict them',
        value: 1
      }, {
        text: 'Think that they are obviously right',
        value: 0
      }, {
        text: 'Defend your own point of view, tooth and smell',
        value: 4
      }, {
        text: 'Continuously interrupt your colleague',
        value: 4
      }]
    }];
  }
}
