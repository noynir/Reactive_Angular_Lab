import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Component({
  selector: 'app-chuck-norris-jokes',
  template: `
      <div>
          <button #btnRandom >Random</button>
          <div>
              {{joke$ | async}}
          </div>
      </div>
  `,
  styles: []
})
export class ChuckNorrisJokesComponent implements OnInit {

  @ViewChild("btnRandom")
  private btnRandom: ElementRef;

  private joke$:Observable<string>


  constructor(private http:Http) { }

  ngOnInit() {
  }

  ngAfterViewInit(){

    //Your code here 'http://api.icndb.com/jokes/random'




  }
}
