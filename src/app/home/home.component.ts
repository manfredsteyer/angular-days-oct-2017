import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    template: `
        <div class="card">
            <div class="header">
                <h2 class="title" *ngIf="!userName">Welcome!</h2>
                <h2 class="title" *ngIf="userName">Welcome, {{userName}}!</h2>
            </div>
            <div class="content">
                <div *ngIf="needsLogin">
                Please log in to use the restricted area of this high sophisticated app!
                </div>

                <button class="btn btn-default" (click)="login()">Login</button>
                <button class="btn btn-default" (click)="logout()">Logout</button>
            
                </div>

        </div>
        <p>&nbsp;</p>
        <p><small><strong>Theme:</strong> <a href="https://www.creative-tim.com/product/paper-dashboard-angular">Paper Dashboard Angular, Creative Tim</a></small></p>
    `
})

export class HomeComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private authService: AuthService
    ) { }

    needsLogin;

    get userName() {
        return this.authService.userName;
    }

    login() {
        this.authService.login();
    }

    logout() {
        this.authService.logout();
    }

    ngOnInit() { 

        this.route.params.subscribe(p => {
            this.needsLogin = p['needsLogin'];
        })
    }
}