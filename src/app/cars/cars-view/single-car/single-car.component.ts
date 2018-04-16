import { Observable } from 'rxjs/Observable';
import { CarsService } from './../../../services/cars.service';
import { NguCarousel } from '@ngu/carousel';
import { Component, OnInit } from '@angular/core';
import 'hammerjs';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.css']
})
export class SingleCarComponent implements OnInit {
  id: number;
  car = [];
  public carousel: NguCarousel;

  constructor(
    private service: CarsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id']
      })

    this.service.getOne(this.id)
      // .finally(() => {
      //   console.log(this.car)
      // })
      .subscribe(
        (res: any) => {
          for(var i=0; i<res.length; i++){
            if(res[i].id === this.id) {
              return this.car = res[i]
            }
          }
        }
      )

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

}
