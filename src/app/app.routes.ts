import { RouterModule, Routes } from '@angular/router';
import {LugaresComponent} from '../app/components/lugares/lugares.component';
import {DetalleComponent} from '../app/components/detalle/detalle.component';
import {ContactoComponent} from '../app/components/contacto/contacto.component';
import {CrearComponent} from '../app/components/crear/crear.component';


const APP_ROUTES: Routes = [
  { path: '', component: LugaresComponent },
  { path: 'lugares', component: LugaresComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'crear', component: CrearComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'lugares' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
