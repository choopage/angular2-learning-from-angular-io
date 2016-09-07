import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-heroes',
    template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
  </div>
  
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  
<h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
    
  `,
    styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
  `]
})

export class HeroesComponent implements OnInit {
    title = 'Tour of Heroes';
    hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    constructor(private heroService: HeroService) {

    }
    heroes: Hero[];

    selectedHero: Hero;

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }

    ngOnInit() : void {
        this.getHeroes();
    }

}

