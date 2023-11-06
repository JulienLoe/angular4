import { Component } from '@angular/core';
import { ViewLetterService } from '../services/view-letter.service';

@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent {

  affichage = ""

  // private logService: LogService

  // constructor(logService: LogService) {
  //   this.logService = logService
  // }

  constructor(
    private viewLetter: ViewLetterService,
  ) { }

  clickHandler() {
    this.viewLetter.getRound()
    .subscribe({
      next: (value) => {
        console.log(value);
        this.affichage = value
      },
      error(err) {
        console.error("On a eu une erreur!");
        console.log(err);
      },
      complete() {
        console.log("On a fini");
      },
    })
  }
  
}
