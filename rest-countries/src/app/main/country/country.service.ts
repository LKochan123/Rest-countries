import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from './country.model';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private _url: string = 'https://restcountries.com/v3.1';

    constructor(private http: HttpClient) { }

    getAllCountries() {
        return this.http.get<Country[]>(`${this._url}/all`);
    }

    getCountryByName(name: string) {
        return this.http.get<Country>(`${this._url}/name/${name}`);
    }

    getCountriesByCodes(codes: string[]) {
        return this.http.get<Country[]>(`${this._url}/alpha?codes=${codes.join(',')}`);
    }
}