import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { CambiarTasaCambioComponent } from './components/operaciones/cambiar-tasa-cambio/cambiar-tasa-cambio.component';
import { ConvertirMonedaComponent } from './components/operaciones/convertir-moneda/convertir-moneda.component';

const appRoutes: Routes = [
  { path: '',
    component: LayoutComponent,
    children: [
      {path: '', component: ConvertirMonedaComponent, data: { title: 'Convertir moneda'}},
      {path: 'cambiar-tasa', component: CambiarTasaCambioComponent, data: {title: 'Cambiar tasa de cambio'}}
    ]
  },
  { path: 'login', component: LoginComponent, data: { title: 'Iniciar sesion' }},
  { path: '**', component: ErrorComponent, data: { title: 'Pagina no encontrada' }}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {}
