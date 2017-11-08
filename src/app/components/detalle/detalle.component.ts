import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LugaresService} from '../../services/lugares.service';
import {Lugar} from '../../interfaces/lugar';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent {


  id = null;
 lugar:any = {};
  constructor(private route:ActivatedRoute, private lugaresService:LugaresService){
    // console.log(this.route.snapshot.params['id'])
    this.id = this.route.snapshot.params['id']
    this.lugar = this.lugaresService.buscarLugar(this.id);
  }





}
