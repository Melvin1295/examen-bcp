import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  constructor(private authService: AuthService, private router: Router) {
    this.items = [
        {label: 'Inicio',  routerLink: ['/'], icon: 'pi pi-fw pi-home'},
        {label: 'Cambiar tasa',  routerLink: ['/cambiar-tasa'] , icon: 'pi pi-fw pi-calendar'},
        {label: 'Salir',  routerLink: ['/login'], icon: 'pi pi-fw pi-cog'}
    ];
    this.activeItem = this.items[0];
   }

  ngOnInit(): void {
      let token = this.authService.getToken();
      if(token == undefined) {
         this.router.navigate(['/login']);
      } else if(token == null) {
         this.router.navigate(['/login']);
      }
  }
}
