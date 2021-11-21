import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginModel, ResponseTokenModel } from '../models/login.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  datos: LoginModel;
  token: ResponseTokenModel;

  constructor(private authService: AuthService, private route: Router) {
    this.datos = new LoginModel('','','password');
    this.token = new ResponseTokenModel('','','',0,'','','','','');
   }

  ngOnInit(): void {
  }

  login(): void {
    console.log(this.datos);
     this.authService.recuperarTokenAutorization({ ...this.datos }).subscribe((resp) => {
       if(resp != null) {
           this.token = resp;
           this.authService.setToken(this.token.access_token);
           this.authService.setUsuario(this.token);
           this.route.navigate(['/']);
       } else {
           Swal.fire('Atención!', 'Nombre de usuario o clave es incorrecto, por favor intentarlo nuevamente.', 'warning');
       }
     }, (err) => {
      Swal.fire('Atención!', 'Error al consulta con API: '+err, 'error');
     });
  }

}
