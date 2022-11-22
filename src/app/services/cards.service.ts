import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable, concat } from 'rxjs';
import { Card } from '../models/card';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(private http: HttpClient) { }

  getCards() : Observable<Card[]> {
    return this.http.get<Card[]>('../../assets/cards.json')
      .pipe(
        map((result) => shuffle(result.concat(result)))
    )
}
}

export function shuffle(array:Array<any>) {
  var copy = [],
    n = array.length,
    i;

  // While there remain elements to shuffle…
  while (n) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * array.length);

    // If not already shuffled, move it to the new array.
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }

  return copy;
}
