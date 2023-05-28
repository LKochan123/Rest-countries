import { Component, OnInit } from '@angular/core';
import { CountryService } from './country/country.service';
import { Country } from './country/country.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  allCountries$!: Observable<Country[]>;
  selectedContinent: string = '';
  actualInput: string = '';

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.allCountries$ = this.countryService.getAllCountries();
  }

  onSelectedOption(actualContinent: string) {
    this.selectedContinent = actualContinent;
  }

  onInputValue(actualInput: string) {
    this.actualInput = actualInput;
  }
}
