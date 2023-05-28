import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryService } from '../main/country/country.service';
import { Country } from '../main/country/country.model';
import { Observable, mergeMap, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { Currencies } from '../main/country/country.model';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  country$!: Observable<Country>;
  borderCountries$!: Observable<Country[]>;

  constructor(private route: ActivatedRoute,
    private countryService: CountryService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getCountryElement(params['country']);
    })
  }

  getCountryElement(name: string) {
    this.country$ = this.countryService.getCountryByName(name).pipe(
      map(data => {
        if (Array.isArray(data)) return data[0];
        else return data;
      }),
      mergeMap((res: Country) => {
        if (res.borders) {
          this.borderCountries$ = this.countryService.getCountriesByCodes(res.borders);
        }
        return of(res);
      })
    )
  }

  displayNativeName(nativeName: Object) {
    const value = Object.values(nativeName);
    return value[0].official;
  }

  displayLanguages(languages: Object) {
    return Object.values(languages).join(', ');
  }

  displayCurrencies(currencies: Object) {
    const values = Object.values(currencies); 
    return values[0].name;
  }
}
