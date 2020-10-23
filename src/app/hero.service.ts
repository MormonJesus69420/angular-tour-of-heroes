import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = HEROES;

    if (heroes.length === 0) {
      this.messageService.add('HeroService: no heroes were fetched');
    } else {
      this.messageService.add('HeroService: fetched all heroes');
    }

    return of(heroes);
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((h) => h.id === id);

    if (hero === undefined) {
      this.messageService.add(`HeroService: no hero with id: ${id} found`);
    } else {
      this.messageService.add(`HeroService: fetched hero with id: ${id}`);
    }

    return of(hero);
  }
}
