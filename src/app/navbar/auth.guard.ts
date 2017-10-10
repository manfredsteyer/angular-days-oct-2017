import { AuthService } from '../shared/auth/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.debug('userName', this.authService.userName)
        if (!this.authService.userName) {
            this.router.navigate(['/home', {needsLogin: true}]);
        }
        return true;
    }
}