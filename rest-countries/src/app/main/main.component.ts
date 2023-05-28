import { Component, OnInit } from '@angular/core';
import { CountryService } from './country/country.service';
import { Country } from './country/country.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  allCountries$!: Observable<Country[]>;
  selectedContinent: string = '';
  actualInput: string = '';
  errorMessage = false;

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.allCountries$ = this.countryService.getAllCountries().pipe(
      catchError(error => {
        this.errorMessage = true;
        return of([]);
      })
    );
  }

  onSelectedOption(actualContinent: string) {
    this.selectedContinent = actualContinent;
  }

  onInputValue(actualInput: string) {
    this.actualInput = actualInput;
  }
}
