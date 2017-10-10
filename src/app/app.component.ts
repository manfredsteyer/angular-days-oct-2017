import { JwksValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showWaitInfo = false;

  constructor(private router: Router) { }


  ngOnInit() {
    this
      .router
      .events
      .filter(e => e instanceof NavigationStart)
      .subscribe(_ => {
        this.showWaitInfo = true;
      });
  
      this
        .router
        .events
        .filter(e => 
          e instanceof NavigationEnd
          || e instanceof NavigationCancel
          || e instanceof NavigationError )
        .subscribe(_ => {
          this.showWaitInfo = false;
        });
  
    }
}
