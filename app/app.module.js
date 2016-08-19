var {NgModule} =  require("@angular/core");
var {BrowserModule} =  require("@angular/platform-browser");
var {FormsModule} =  require("@angular/forms");

var {AppComponent} = require('./app.component');
var {routing} = require('./app.routing');

var {HeroesComponent} = require('./heroes.component');
var {DashboardComponent} = require('./dashboard.component');
var {HeroDetailComponent} = require('./hero-detail.component');

var {HeroService} = require('./hero.service');

class AppModule {}

AppModule.annotations = [
    new NgModule({
            imports: [
                BrowserModule,
                FormsModule,
                routing
            ],
            declarations: [
                AppComponent,
                HeroesComponent,
                DashboardComponent,
                HeroDetailComponent
            ],
            providers: [
                HeroService
            ],
            bootstrap: [ AppComponent ]
        })
];

exports.AppModule = AppModule;

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/