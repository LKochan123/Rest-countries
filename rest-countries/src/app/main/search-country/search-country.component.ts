import { Component, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.scss']
})
export class SearchCountryComponent {
    @Output()
    selectedOption: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    inputValue: EventEmitter<string> = new EventEmitter<string>();

    @ViewChild('searchCountry') 
    searachCountryInput!: ElementRef;

    continentArr: string[] = ['Africa', 'Asia', 'Europe', 'North America', 'Oceania', 'South America'];

    onSelect(selectValue: string) {
      this.selectedOption.emit(selectValue);
      this.searachCountryInput.nativeElement.value = '';
      this.inputValue.emit('');
    }

    onSearch(inputValue: string) {
      this.inputValue.emit(inputValue);
    }
    
}
