import { Component } from '@angular/core';



@Component({
    selector: 'my-app',
    template: `
   <div class="container"> <h1>{{title}}</h1>
   
   <hero-list-component></hero-list-component>
   
   <hr>
   
    <a routerLink="/heroes">heroes</a>
    <router-outlet></router-outlet>
</div>  `
})
export class AppComponent {
    title = 'Tour of Heroes';
}