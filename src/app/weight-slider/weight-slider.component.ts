import {Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer} from '@angular/core';
import {Observable} from "rxjs";


@Component({
  selector: 'app-weight-slider',
  template: `
     <div class="row">
        Weight: <span id="weight-text"></span>{{weightText }}kg 
        <input type="range" min="40" max="120" step="1" value="70" #weightSlider  />
    </div>
  `,
  styles: []
})
export class WeightSliderComponent implements OnInit,AfterViewInit {

  @ViewChild('weightSlider')
  private weightSlider: ElementRef;

  private weightText: number;

  private inputStream$:Observable<any>
  constructor() {
  }

  ngOnInit() {


  }

  ngAfterViewInit(){

  }
}
