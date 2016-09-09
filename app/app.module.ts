import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { HeroesComponent } from './heroes.component';

import { HeroDetailComponent } from './hero-detail.component';

import {HeroService} from "./hero.service";

import { HeroListComponent } from './hero-list.component';

import { routing }        from './app.routing';

import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, FormsModule, routing, HttpModule, JsonpModule],
    declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, HeroListComponent ],
    providers: [ HeroService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {

}