var Injectable =  require("angular2/core").Injectable;

var HEROES = require('./mock-heroes').HEROES;

exports.HeroService = function () {};

exports.HeroService.annotations = [
    new Injectable()
];
exports.HeroService.prototype = {
    getHeroes: function() {
        return Promise.resolve(HEROES);
    },
    getHeroesSlowly: function() {
         return new Promise((resolve) =>  setTimeout(resolve, 2000, HEROES));
     },
    getHero: function (id) {
        return  Promise.resolve(HEROES.filter((hero) => hero.id === id)[0]);
    }
};