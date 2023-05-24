import { Component, OnInit } from '@angular/core';
import { CountryService } from './country/country.service';
import { Country } from './country/country.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  allCountries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getAllCountries().subscribe(responseData => {
      this.allCountries = responseData;
    });
  }
}
