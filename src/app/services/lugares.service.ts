import { Injectable } from '@angular/core';
import {Lugar} from '../interfaces/lugar';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class LugaresService {
  private lugares:any = [
    {id:1 ,plan: 'pagado' ,cercania: 1, distancia: 1, active:true ,nombre:"Zara", descriptions: "Descripcion no se que poner 123"},
    {id:2 ,plan: 'gratuito' ,cercania: 1, distancia: 1.8, active:false ,nombre:"Bershka", descriptions: "Descripcion no se que poner 123"},
    {id:3 ,plan: 'gratuito' ,cercania: 2, distancia: 5, active:true ,nombre:"Forever 21", descriptions: "Descripcion no se que poner 123"},
    {id:4 ,plan: 'pagado' ,cercania: 3, distancia: 10, active:false ,nombre:"Pull & Bear", descriptions: "Descripcion no se que poner 123"},
    {id:5 ,plan: 'gratuito' ,cercania: 3, distancia: 35, active:true ,nombre:"H&M", descriptions: "Descripcion no se que poner 123"}  ];


  constructor(private afDB:AngularFirestore) { }

  public getLugares(){
    return this.lugares;
  }

  public buscarLugar(id){
    return this.lugares.filter((lugar) =>{ return lugar.id == id})[0] || null;
  }

  public guardarLugar(lugar){
    console.log(lugar);
  }


}
