import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchTermChange = new EventEmitter<string>();
  searchTerm: string = '';

  search(): void {
    this.searchTermChange.emit(this.searchTerm);
  }
}
