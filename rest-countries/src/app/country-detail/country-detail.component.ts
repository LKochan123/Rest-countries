import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CountryService } from '../main/country/country.service';
import { Country } from '../main/country/country.model';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

    country!: Country;
  
    constructor(private route: ActivatedRoute, 
      private countryService: CountryService ) { }

    ngOnInit() {
      this.route.params.subscribe((params: Params) => {
        this.getCountryElement(params['country']);
      })
    }

    getCountryElement(name: string) {
      this.countryService.getCountryByName(name).subscribe(country => {
        const countryTemp: any = { ...country };
        this.country = countryTemp[0];
      })
    }
}
