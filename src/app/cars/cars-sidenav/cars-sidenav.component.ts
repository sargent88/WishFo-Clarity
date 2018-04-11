import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-cars-sidenav',
  templateUrl: './cars-sidenav.component.html',
  styleUrls: ['./cars-sidenav.component.css']
})
export class CarsSidenavComponent implements OnInit {
  cars: any = [];

  constructor(private service: CarsService) { }

  ngOnInit() {
    this.service.getAll()
    .finally(() => {
      // console.log(this.cars.length)
    })
    .subscribe((resp) => {this.cars = resp})
  }
}
