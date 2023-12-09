import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [],
})
export class InputComponent {
  // Declaring variables
  term: string = '';

  // Emiting variable
  @Output() onSearch: EventEmitter<string> = new EventEmitter();

  // Search method to emit the term
  search() {
    this.onSearch.emit(this.term);
  }
}
