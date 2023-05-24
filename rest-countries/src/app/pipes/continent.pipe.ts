import { Pipe, PipeTransform } from "@angular/core";
import { Country } from "../main/country/country.model";

@Pipe({
    name: 'ContinentPipe',
    pure: false
})
export class ContinentPipe implements PipeTransform {
    transform(countries: Country[], continent: string) {
        const resultArray: Country[] = [];
        countries.forEach(country => {
            if (country.continents.includes(continent)) {
                resultArray.push(country);
            }
        });
        return resultArray;
    }
}