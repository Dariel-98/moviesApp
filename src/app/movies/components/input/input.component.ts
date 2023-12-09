import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [],
})
export class InputComponent implements OnInit {
  // Declaring variables
  term: string = '';

  // Emiting variable
  @Output() onSearch: EventEmitter<string> = new EventEmitter();
  // Debounce to clean the error message in the search
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  ngOnInit() {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }
  // Search method to emit the term
  search() {
    this.onSearch.emit(this.term);
  }

  keyPressed(event: any) {
    this.debouncer.next(this.term);
  }
}