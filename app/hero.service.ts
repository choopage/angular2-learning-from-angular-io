import {Injectable} from '@angular/core';

import {Hero} from './hero';
import {HEROES} from './mock-heroes';

import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/do';

import { Headers, RequestOptions } from '@angular/http';


@Injectable()
export class HeroService {

    constructor(private http: Http) {

    }

    private heroesUrl = 'app/heroes.json'; // URL to web API

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesObservable(): Observable<Hero[]> {
        return this.http.get(this.heroesUrl).map(this.extractData).do(data => console.log(data)).catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: any) {
        //In a real world app, we might use a remoate logging infrastructure
        //We would also dig deeper into the error to get a better message

        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

    addHero(name: string): Observable<Hero> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({headers: headers});
        return this.http.post(this.heroesUrl, body, options).map(this.extractData).do(data => console.log(data)).catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve => setTimeout(() => resolve(HEROES), 5000));
    }


}