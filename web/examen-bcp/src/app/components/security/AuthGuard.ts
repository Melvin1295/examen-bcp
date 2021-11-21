import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Filtro de sesión de usuario
 * @author Madiazr
 * @date 18/01/2021
 */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.getToken()) {
            return true;
        }else{
            this.router.navigate(['/busqueda']);
            return false;
        }

    }
}
