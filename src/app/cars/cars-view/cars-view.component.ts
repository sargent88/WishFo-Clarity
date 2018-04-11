import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import { Component, OnInit } from '@angular/core';
import { CarsService, Car } from './../../services/cars.service';
import 'hammerjs';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'app-cars-view',
  templateUrl: './cars-view.component.html',
  styleUrls: ['./cars-view.component.css']
})
export class CarsViewComponent implements OnInit {
  cars: any = [];
  oneCar: Car;
  showModal: boolean = false;
  public carousel: NguCarousel;

  constructor(private service: CarsService) { }

  ngOnInit() {
    this.service.getAll()
    .finally(() => {
      console.log(this.cars.length)
    })
    .subscribe((resp) => {this.cars = resp})

    this.carousel = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      // interval: 4000,
      point: {
        visible: false
      },
      load: 2,
      touch: true,
      loop: true,
    }
  }

  openModal($event, car) {
    $event.preventDefault();
    this.oneCar = car;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.oneCar = null;
  }

}
