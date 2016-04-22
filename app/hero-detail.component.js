var Component =  require("angular2/core").Component;
var RouteParams =  require("angular2/router").RouteParams;
var HeroService = require('./hero.service').HeroService;

exports.HeroDetailComponent = function (_routeParams, _heroService) {
    this._routeParams = _routeParams;
    this._heroService = _heroService;
};

exports.HeroDetailComponent.parameters = [RouteParams, HeroService];
exports.HeroDetailComponent.annotations = [
    new   Component({
        selector: 'my-hero-detail',
        inputs: ['hero'],
        templateUrl: "app/hero-detail.component.html",
        styleUrls: ["app/hero-detail.component.css"],
    })
];

exports.HeroDetailComponent.prototype = {
    ngOnInit: function() {
          var id = +this._routeParams.get('id');
          this._heroService.getHero(id).then(hero => this.hero = hero);
    },
    goBack: function() {
        window.history.back();
    }
};
