var Component =  require("angular2/core").Component;
var Router =  require("angular2/router").Router;

var HeroService = require('./hero.service').HeroService;
var HeroDetailComponent = require('./hero-detail.component').HeroDetailComponent;

exports.HeroesComponent = function (_router, _heroService) {
    this._router = _router;
    this._heroService = _heroService;
};

exports.HeroesComponent.parameters = [Router, HeroService];
exports.HeroesComponent.annotations = [
    new  Component({
        selector: 'my-app',
        templateUrl: "app/heroes.component.html",
        styleUrls: ["app/heroes.component.css"],
        directives: [HeroDetailComponent],
    })
];

exports.HeroesComponent.prototype = {
    getHeroes:  function() {
        this._heroService.getHeroes().then( (heroes) =>  this.heroes = heroes);
    },
    ngOnInit:  function() {
        this.getHeroes();
    },
    onSelect: function (hero) {
         this.selectedHero = hero;
    },
    gotoDetail:  function () {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    },
};