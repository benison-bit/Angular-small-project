import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appMouseWheel]'
})
export class MouseWheelDirective {

  @Output() mouseWheelUp = new EventEmitter();
  @Output() mouseWheelDown = new EventEmitter();

  constructor(private elementRef: ElementRef) { }

  @HostListener('wheel', ['$event'])
  onMouseWheel(event: WheelEvent) {
    if (event.deltaY < 0) {
      this.mouseWheelUp.emit(event);
    } else if (event.deltaY > 0) {
      this.mouseWheelDown.emit(event);
    }
  }
}
