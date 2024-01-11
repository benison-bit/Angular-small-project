import { trigger, transition, style, animate, keyframes } from '@angular/animations';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent {
  @Input() options: string[] = [];
  @Input() selectedOptionIndex: number = 0;
  @Output() optionClicked: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  onOptionClick(index: number): void {
    this.optionClicked.emit(index);
  }
}
