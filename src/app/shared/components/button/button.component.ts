import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() isLoading: boolean;
  @Input() text: string;
  @Input() stylingMode: 'contained' | 'outlined' | 'text';
  @Input() type: 'default' | 'success' | 'danger';
  @Input() width: number;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onClick = new EventEmitter<void>();

  constructor() {
  }

  click(): void {
    this.onClick.emit();
  }
}
