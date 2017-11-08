import { Component, OnInit } from '@angular/core';
import {LugaresService} from '../../services/lugares.service'

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent  {

  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom:number = 16;
  black:string = "#a3ccff";
  lugares = null;

  constructor(private lugaresService: LugaresService){
    this.lugares = lugaresService.getLugares();
  }


}
