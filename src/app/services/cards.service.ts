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
  url = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) {}

  // from local file
  getCards(): Observable<Card[]> {
    return this.http
      .get<Card[]>('../../assets/cards.json')
      .pipe(map((result) => shuffle(result.concat(result))));
  }

  // from api
  getCardsApi(): Observable<Card[]> {
    return this.http.get<Card[]>(this.url).pipe(
      tap((result) => console.log('via Json server: ' + result)),
      map((result) => shuffle(result.concat(result))),
      catchError((err) => {
        console.log('geen API gevonden');
        return of(err);
      })
    );
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
