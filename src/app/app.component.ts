import { GuardsCheckEnd, GuardsCheckStart } from '@angular/router';
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
      .filter(e => 
        e instanceof NavigationStart 
        || e instanceof GuardsCheckEnd
      )
      .subscribe(_ => {
        this.showWaitInfo = true;
      });
  
      this
        .router
        .events
        .filter(e => 
          e instanceof NavigationEnd
          || e instanceof NavigationCancel
          || e instanceof NavigationError 
          || e instanceof GuardsCheckStart
        )
        .subscribe(_ => {
          this.showWaitInfo = false;
        });

        this.router.events.subscribe(e => console.debug('event', e));
  
    }
}
