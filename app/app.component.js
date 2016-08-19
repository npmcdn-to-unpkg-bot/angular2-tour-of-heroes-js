var {Component} = require("@angular/core");

class AppComponent {
    // ES6中class不存在属性
    // title = 'Tour of Heroes'; // ES7
    get title(){return 'Tour of Heroes';}
}

// ES6不支持注解 annotations
AppComponent.annotations = [
     new Component({
            selector: 'my-app',
            template: `
                <h1>{{title}}</h1>
                <nav>
                  <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
                  <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
                </nav>
                <router-outlet></router-outlet>
            `,
            styleUrls: ['app/app.component.css'],
          })
];

exports.AppComponent =  AppComponent;

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/