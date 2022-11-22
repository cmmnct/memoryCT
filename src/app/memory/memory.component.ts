import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card';
import { CardsService } from '../services/cards.service';

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.css'],
})
export class MemoryComponent implements OnInit {
  cards$!: Observable<Card[]>;
  cardbase$!: Observable<Card[]>;

  constructor(private cardservice: CardsService) {}

  ngOnInit(): void {
    this.cards$ = this.cardservice.getCards()
    this.cardbase$ = this.cardservice.getCardsApi()
  }

  onClickCard(event: Card) {
    console.log(event.card1)
  }
}
