import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {APP_ROUTING} from './app.routes';
// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

// environments
import { environment } from '../environments/environment';

// Servicios
import {LugaresService} from './services/lugares.service'

// Componentes
import { AppComponent } from './app.component';
import { ResaltarDirective } from './directives/resaltar.directive';
import { ContarClicksDirective } from './directives/contar-clicks.directive';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { LugaresComponent } from './components/lugares/lugares.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CrearComponent } from './components/crear/crear.component';

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    NavbarComponent,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCd1ZKCD-9EfjYI1ownwOdPBGrJSHqQULw'
    })  ],
  providers: [LugaresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
