var {Component} = require("@angular/core");
var {Router} =  require("@angular/router");

var {HeroService} = require('./hero.service');

class DashboardComponent {
    constructor (router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    ngOnInit () {
        this.heroService.getHeroes()
           .then(heroes => this.heroes = heroes.slice(1, 5));
    }
    gotoDetail (hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}

DashboardComponent.parameters = [Router, HeroService];
DashboardComponent.annotations = [
     new Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard.component.html',
            styleUrls: ['app/dashboard.component.css']
        })
];

exports.DashboardComponent =  DashboardComponent; 

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/