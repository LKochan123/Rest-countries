import { Component, Input } from '@angular/core';
import { CountryService } from './country.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {

  @Input() country: any;
}
