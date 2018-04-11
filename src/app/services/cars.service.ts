import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Car {
  id: number;
  year: number;
  make: string;
  model: string;
  color: string;
  trim: string;
  cost: string;
  miles: number;
  type: string;
  description: string;
  thumbnail: string;
  photo_front: string;
  photo_back: string;
  photo_side: string;
  photo_inside_front: string;
  photo_inside_back: string;
}

@Injectable()
export class CarsService {
  private dataSet = './../../assets/data/wishfo.json';

  constructor(private http: HttpClient) { }
  
  getAll() {
    return this.http.get(this.dataSet)
  }

}
