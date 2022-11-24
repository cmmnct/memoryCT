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
  cardClasses: string;
  list: number[];
  boardOption: number;
  firstCard!: Card | undefined;
  secondCard!: Card | undefined;

  constructor(private cardservice: CardsService) {
    this.list = [4, 5, 6];
    this.boardOption = -1;
    this.cardClasses = `card`;
  }

  ngOnInit(): void {
    if (window.localStorage.getItem('gamestate')) {
    }
  }

  onClickCard(clickedCard: Card) {
    console.log(clickedCard.card1);
    if (!this.firstCard) {
      clickedCard.state.covered = false;
      this.firstCard = clickedCard;
    } else if (
      this.firstCard &&
      !this.secondCard &&
      clickedCard !== this.firstCard
    ) {
      clickedCard.state.covered = false;
      this.secondCard = clickedCard;
      this.evaluateMatch();
    }
  }

  onSelectBoard() {
    this.cardClasses = `card card${this.boardOption}`;
    this.cardbase$ = this.cardservice.getCardsApi(this.boardOption);
  }

  evaluateMatch() {
    setTimeout(() => {
      if (this.firstCard && this.secondCard) {
        this.firstCard.state.covered = true;
        this.secondCard.state.covered = true;
        if (this.firstCard.card1 === this.secondCard.card1) {
          this.firstCard.state.hidden = true;
          this.secondCard.state.hidden = true;
          // to do : ophogen van de score
        }

        this.firstCard = undefined;
        this.secondCard = undefined;
      }
    }, 2000);
  }

}
