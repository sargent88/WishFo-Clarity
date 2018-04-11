import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import { Component, OnInit } from '@angular/core';
import { CarsService, Car } from './../../services/cars.service';

@Component({
  selector: 'app-cars-view',
  templateUrl: './cars-view.component.html',
  styleUrls: ['./cars-view.component.css']
})
export class CarsViewComponent implements OnInit {
  cars: any = [];
  oneCar: Car;
  showModal: boolean = false;

  constructor(private service: CarsService) { }

  ngOnInit() {
    this.service.getAll()
    .finally(() => {
      console.log(this.cars.length)
    })
    .subscribe((resp) => {this.cars = resp})
  }

  openModal($event, car) {
    // console.log($event, car)
    $event.preventDefault();
    this.oneCar = car;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.oneCar = null;
  }

}