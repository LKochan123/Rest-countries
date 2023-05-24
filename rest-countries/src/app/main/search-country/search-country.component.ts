import { Component } from '@angular/core';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.scss']
})
export class SearchCountryComponent {
    selectedOption: string = '0';
    continentArr: string[] = ['Africa', 'Asia', 'Europe', 'North America', 'Ocenia', 'South America'];
}
