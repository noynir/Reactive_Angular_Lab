import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-bmi-calculator',
  template: `
     <div class="row">
        Weight: <span id="weight-text"></span>{{weightText }}kg 
        <input type="range" min="40" max="120" step="1" value="70" #weightSlider  /> 
        
        Height: <span id="weight-text"></span>{{heightText }}cm
        <input type="range" min="40" max="250" step="1" value="50" #heightSlider  />
        
        <div>
          Your BMI is:{{bmiText}}
        </div>
    </div>
  `,
  styles: []
})
export class BmiCalculatorComponent implements OnInit,AfterViewInit {

  @ViewChild('weightSlider')
  private weightSlider: ElementRef;

  @ViewChild('heightSlider')
  private heightSlider: ElementRef;

  private weightText: number;
  private heightText: number;
  private bmiText: number;

  private inputStream$:Observable<any>
  constructor() {
  }

  ngOnInit() {


  }

  ngAfterViewInit(){

    const weight$=Observable.fromEvent(this.weightSlider.nativeElement,'input')
      .map( (e:any) => e.target.value)
      //.startWith(this.weightSlider.nativeElement.value);

    const height$=Observable.fromEvent(this.heightSlider.nativeElement,'input')
      .map( (e:any) => e.target.value)
      //.startWith(this.weightSlider.nativeElement.value)

    const bmi=Observable.combineLatest(weight$,height$)
      .map( ([weightKg,heightCm])=>{
          var heightMeters = +heightCm * 0.01;
          let bmi= weightKg / (heightMeters * heightMeters);
          return bmi;
      })

    weight$.subscribe(x =>this.weightText=x);
    height$.subscribe(x => this.heightText=x);
    bmi.subscribe(x => this.bmiText=x);

  }

}
