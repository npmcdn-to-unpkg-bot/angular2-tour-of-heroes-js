var {Component} = require("@angular/core");
var {Router} = require("@angular/router");
var {HeroService} = require("./hero.service");

class HeroesComponent {
    constructor (router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    
    getHeroes () {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit () {
        this.getHeroes();
    }

    onSelect (hero) { this.selectedHero = hero; }

    gotoDetail () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}

HeroesComponent.parameters = [Router, HeroService];
HeroesComponent.annotations = [
    new  Component({
        selector: 'my-heroes',
        templateUrl: 'app/heroes.component.html',
        styleUrls:  ['app/heroes.component.css']
    })
];

exports.HeroesComponent = HeroesComponent; 

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/