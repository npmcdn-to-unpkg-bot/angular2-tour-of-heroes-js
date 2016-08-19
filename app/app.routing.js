var {RouterModule} =  require("@angular/router");

var {DashboardComponent} =  require("./dashboard.component");
var {HeroesComponent} =  require("./heroes.component");
var {HeroDetailComponent} =  require("./hero-detail.component");

const appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    }
];

exports.routing = RouterModule.forRoot(appRoutes);


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/