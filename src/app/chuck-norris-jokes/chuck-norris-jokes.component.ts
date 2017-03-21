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

    this.joke$=Observable.fromEvent(this.btnRandom.nativeElement,'click')
      .switchMap(()=> this.http.get('http://api.icndb.com/jokes/random'))
      .map(response=>response.json())
      .map(obj=> obj.value.joke)



  }
}
