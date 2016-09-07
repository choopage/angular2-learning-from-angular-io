import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
   <div class="container"> <h1>{{title}}</h1>
    <a routerLink="/heroes">heroes</a>
    <router-outlet></router-outlet>
</div>  `
})
export class AppComponent {
    title = 'Tour of Heroes';
}