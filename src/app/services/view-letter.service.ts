import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ViewLetterService {

  constructor() { }

  countdown() {
    return new Observable<number>((subscriber) => {
      let count = 0

      setInterval(() => {
        if (count === 25) {
          subscriber.complete()
        }
        subscriber.next(count++)
      }, 1000)
    })
  }

  getRound() {
    return this.countdown().pipe(map(data => `${String.fromCharCode((data)+ 65)}`))
  }
}
