var {Component} =  require("@angular/core");
var {ActivatedRoute, Params} =  require("@angular/router");

var {HeroService} = require('./hero.service');

class HeroDetailComponent {
    constructor (heroService, route) {
        this.heroService = heroService;
        this.route = route;
    }
    ngOnInit () {
      this.route.params.forEach((params) => {
          let id = +params['id'];
          this.heroService.getHero(id)
              .then(hero => this.hero = hero);
      });
    }
    goBack () {
        window.history.back();
    }
}

HeroDetailComponent.parameters = [HeroService, ActivatedRoute];
HeroDetailComponent.annotations = [
    new Component({
          selector: 'my-hero-detail',
          templateUrl: 'app/hero-detail.component.html',
          styleUrls: ['app/hero-detail.component.css']
    })
];


exports.HeroDetailComponent = HeroDetailComponent ;


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/