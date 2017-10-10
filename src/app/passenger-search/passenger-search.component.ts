import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/auth/auth.service';

@Component({
  selector: 'passenger-search',
  template: `
        
        <div class="card">
            <div class="header">
                <h1 class="title">Passenger Search</h1>
            </div>
            <div class="content">
                <form>
                    <div class="form-group">
                        <label>Passenger:</label>
                        <input name="from" [(ngModel)]="passenger" class="form-control">
                    </div>
                    <div class="form-group">
                        <button class="btn btn-default">Search</button>
                    </div>
                    <div>
                        This is just a dummy page!
                    </div>

                </form>
            </div>
        </div>
    `
})

export class PassengerSearchComponent implements OnInit {
    constructor(private authService: AuthService) { 
        this.passenger = this.authService.userName;
    }

    passenger: string;

    ngOnInit() { 
        

    }
}