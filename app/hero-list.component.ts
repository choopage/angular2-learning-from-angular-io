/**
 * Created by jerchoo on 7/9/16.
 */
import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';

@Component({
    selector: 'hero-list-component',
    template: `
        <h1>Tour of Heroes ({{mode}})</h1>
        <h3>Heroes:</h3>
        <ul>
          <li *ngFor="let hero of heroes">
            {{hero.name}}
          </li>
        </ul>
        New hero name:
        <input #newHeroName />
        <button (click)="addHero(newHeroName.value); newHeroName.value=''">
          Add Hero
        </button>
        <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
    `
})

export class HeroListComponent implements OnInit {
    errorMessage: string;
    heroes: Hero[];
    mode = 'Observable';

    constructor(private heroService: HeroService) {
    }

    ngOnInit() {
        this.getMyHeroes();
    }

    getMyHeroes() {
        this.heroService.getHeroesObservable().subscribe(heroes => this.heroes = heroes, error => this.errorMessage = <any>error);
    }

    addHero(name: string) {
        if (!name) {
            return;
        }
        this.heroService.addHero(name)
            .subscribe(
                hero => this.heroes.push(hero),
                error => this.errorMessage = <any>error);
    }
}