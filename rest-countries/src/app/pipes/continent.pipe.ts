import { Pipe, PipeTransform } from "@angular/core";
import { Country } from "../main/country/country.model";

@Pipe({
    name: 'CountryFilter',
    pure: false
})
export class CountryPipe implements PipeTransform {
    transform(countries: Country[], inputValue: string, continent: string) {

        let resultArray: Country[] = [];
        
        if (inputValue.length === 0 && continent === '') {
            return countries; 
        } else if (inputValue.length === 0) {
            countries.forEach(country => {
                if (country.continents.includes(continent)) {
                    resultArray.push(country);
                }
            });
        } else {
            countries.forEach(country => {
                const countryName = country.name.common.toLowerCase();
                if (countryName.includes(inputValue.toLowerCase())) {
                    resultArray.push(country);
                }
            })
        }

        return resultArray;
    }
}