import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;
  @Output() cardClicked = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClickCard() {
    this.cardClicked.emit(this.card);
  }

}
