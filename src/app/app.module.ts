import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgxGpAutocompleteModule } from '@angular-magic/ngx-gp-autocomplete';
import { Loader } from '@googlemaps/js-api-loader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxGpAutocompleteModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{
    provide: Loader,
    useValue: new Loader({
      apiKey: 'youekeyhere',
      libraries: ['places']
    })
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
