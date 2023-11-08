import { NgxGpAutocompleteDirective } from '@angular-magic/ngx-gp-autocomplete';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('ngxPlaces')
  placesRef!: NgxGpAutocompleteDirective;

  title = 'google-test';
}
