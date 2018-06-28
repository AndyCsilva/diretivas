import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'button[appBotaoPrimario]'
})
export class BotaoPrimarioDirective {

  constructor(private _el: ElementRef, private _rendered: Renderer2) {
    this._rendered.addClass(this._el.nativeElement, 'btn');
    this._rendered.addClass(this._el.nativeElement, 'btn-primary');
   }

}
