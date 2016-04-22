var Component =  require("angular2/core").Component;
var Router =  require("angular2/router").Router;

var HeroService = require('./hero.service').HeroService;

exports.DashboardComponent =  function (_router, _heroService) {
    this._router = _router;
    this._heroService = _heroService;
};

exports.DashboardComponent.parameters = [Router, HeroService];
exports.DashboardComponent.annotations = [
     new Component({
            selector: 'my-dashboard',
            templateUrl: "app/dashboard.component.html",
            styleUrls: ["app/dashboard.component.css"],
        })
];

exports.DashboardComponent.prototype = {
    ngOnInit: function() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    },
   gotoDetail: function(hero) {
        var link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
};
