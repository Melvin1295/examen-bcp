import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { ConvertirMonedaComponent } from './components/operaciones/convertir-moneda/convertir-moneda.component';
import { CambiarTasaCambioComponent } from './components/operaciones/cambiar-tasa-cambio/cambiar-tasa-cambio.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabMenuModule } from 'primeng/tabmenu';
import { MenuComponent } from './components/layout/menu/menu.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { JwtInterceptor } from './components/security/JwtInterceptor';
import { ErrorCredencialesInterceptor } from './components/security/ErrorCredencialesInterceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducers } from './components/store/app.reducers';
import { AppEffectsArray } from './components/store/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InputNumberModule } from 'primeng/inputnumber';
import { environment } from 'src/environments/environment';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    LayoutComponent,
    LoginComponent,
    ConvertirMonedaComponent,
    CambiarTasaCambioComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TabMenuModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    BrowserAnimationsModule,
    InputTextareaModule,
    TableModule,
    DialogModule,
    StoreModule.forRoot( appReducers ),
    EffectsModule.forRoot( AppEffectsArray ),
    StoreModule.forFeature('appReducer', appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorCredencialesInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
