import { Directive , HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: 'li[contar-clicks]'
})
export class ContarClicksDirective {
  // cuenta la cantidad de clicks
  clickN = 1;

@HostBinding('style.opacity') opacity:number = .1
  // Parametros: evento ,arreglo
@HostListener('click', ['$event.target']) onClick(btn){
  console.log(btn, "Numero de clicks:" , this.clickN++);
  this.opacity += .1;
}
  constructor() { }

}
