var Component =  require("angular2/core").Component;
var RouteConfig =  require("angular2/router").RouteConfig;
var ROUTER_DIRECTIVES =  require("angular2/router").ROUTER_DIRECTIVES;
var ROUTER_PROVIDERS =  require("angular2/router").ROUTER_PROVIDERS;

var DashboardComponent = require('./dashboard.component').DashboardComponent;
var HeroesComponent = require('./heroes.component').HeroesComponent;
var HeroDetailComponent = require('./hero-detail.component').HeroDetailComponent;
var HeroService = require('./hero.service').HeroService;

exports.AppComponent = function () {
        this.title = 'Tour of Heroes';
};

exports.AppComponent.annotations = [
    new Component({ 
        selector: 'my-app',
        template: `
            <h1>{{title}}</h1>
            <nav>
              <a [routerLink]="['Dashboard']">Dashboard</a>
              <a [routerLink]="['Heroes']">Heroes</a>
            </nav>
            <router-outlet></router-outlet>
        `,
        styleUrls: ['app/app.component.css'],
        directives: [ROUTER_DIRECTIVES],
        providers: [ROUTER_PROVIDERS, HeroService]
    }), 
    new RouteConfig([
        {path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
        {path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent },
        {path: '/heroes', name: 'Heroes', component: HeroesComponent}
    ])
];
