import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  private backgroundColor: string;

  //faz o binding da propriedade css  
  // @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.backgroundColor') get setColor(){
    return this.backgroundColor;
  }

  //escuta o evento (no hospedeiro da diretiva) de mover o mouse em cima do elemento  
  @HostListener('mouseover') onMouseOver() {
    //this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'red');

    //codigo extra se desejar manipular
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') onMouseOut () {
   // this._renderer.setStyle(this._elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'white';
  }

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2) {}

}
