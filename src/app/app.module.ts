import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeightSliderComponent } from './weight-slider/weight-slider.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { ChuckNorrisJokesComponent } from './chuck-norris-jokes/chuck-norris-jokes.component';

@NgModule({
  declarations: [
    AppComponent,
    WeightSliderComponent,
    BmiCalculatorComponent,
    ChuckNorrisJokesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
