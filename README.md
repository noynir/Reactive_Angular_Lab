# ReactiveAngularLab
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.


### Reactive Mindset
Draw an ascii or a marble diagram for the following:
From a stream of key input events you need to count the number of times a certain character has appread.
possible operators to use in this situations.(not neccessarily in this order and not binding to all)
* [map](http://reactivex.io/documentation/operators/map.html)
* [scan](http://reactivex.io/documentation/operators/scan.html)
* [filter](http://reactivex.io/documentation/operators/filter.html)
* [group by](http://reactivex.io/documentation/operators/groupby.html)

Diagram Example
```
--a---b-c---d---X---|->

a, b, c, d are emitted values
X is an error
| is the 'completed' signal
---> is the timeline

clickStream: 
---c----c--c----c------c-->
   vvvvv map(c becomes 1) vvvv
---1----1--1----1------1-->
```


### Reactive Angular
In This lab you will build 3 basic component using RxJS.
You can look in the [demos repo](https://github.com/noynir/Reactive_Angular/) for help

1.  **weight slider**
    in the `weight-slider.component` you are required to create a stream from the slider input.
    use `Observable.fromEvent()` method on the `input` event.
    next, using RxJS Operators you need get the input value and render it (you can use angular) next to the slide input.
  
2.  **bmi calculator** 
    in `bmi-calculator.component` you are required to calculate the bmi based on 2 input slider weight and height.
    similiar to section you need to get the input values stream from both sliders.
    but now you need to combine them and using combining operators and transofrming operators render the calculated bmi under the sliders.

3.  **chuck norris**
    in the `chuck-norris-jokes.component` you are required to fetch json from an api and display it on the screen
    you will be using [The Internet Chuck Norris Database](http://www.icndb.com/) which is a simple restful api that returns random chuck norris jokes in json.
    Each click of a button you need to fetch a new joke from the api and display the joke text only to screen.
  




## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


