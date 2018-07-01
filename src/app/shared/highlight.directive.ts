import { Directive, HostListener, ElementRef, Renderer2, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  private backgroundColor: string;
  @Input() defaultColor: string = 'white';
  @Input('appHighlight') highLightColor: string = 'yellow';

  //faz o binding da propriedade css  
  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  //escuta o evento (no hospedeiro da diretiva) de mover o mouse em cima do elemento  
  @HostListener('mouseover') onMouseOver() {
    this.backgroundColor = this.highLightColor;
  }

  @HostListener('mouseleave') onMouseOut() {
    this.backgroundColor = this.defaultColor;
  }

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

}
