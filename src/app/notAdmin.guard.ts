import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './login/user.service';
import { UserType } from 'src/models/userType.enum';

@Injectable({
    providedIn: 'root'
})
export class notAdminGuard implements CanActivate {
    type: UserType;
    constructor(
        private router: Router,
        private userService: UserService) {
        this.userService.publicType.subscribe(x => this.type = x);
        this.userService.getType();
    }

    canActivate(route: ActivatedRouteSnapshot) {
        console.log(this.type);
        if (this.type !== UserType.notConnected) {
            return true;
        } else {
            this.router.navigate(['/']);
            return false;
        }

    }
}