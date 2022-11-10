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
  card$!: Observable<Card[]>;

  constructor(private cards: CardsService) {}

  ngOnInit(): void {

    
  }
}
