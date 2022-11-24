import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable} from 'rxjs';
import { Card } from '../models/card';
import { map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of'

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  url = 'http://localhost:3000/cards'; // type inference

  constructor(private http: HttpClient) {}



  // from api
  getCardsApi(size:number): Observable<Card[]> {
    return this.http.get<Card[]>(this.url).pipe(
      tap((result) => console.log('via Json server: ' + size)),
      map(result => {
        let truncated = truncate(shuffle(result), size);
        let final = shuffle(truncated.concat(truncated));
        let cardset = final.map(item => new Card(item.set, item.card1, item.card2))
        return cardset;
      }),
      catchError((err) => {
        console.log('geen API gevonden');
        return of(err);
      })
    );
  }
}

export function truncate(array: Array<any>, size: number) {
  let length = Math.floor(Math.pow(size, 2)/2);
  return array.splice(0, length)
}

export function shuffle(array: Array<any>) {
  
  //fisher yates shuffle
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
