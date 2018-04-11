import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { SingleCarComponent } from './cars/cars-view/single-car/single-car.component';
import { PromosComponent } from './promos/promos.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'cars', component: CarsComponent },
    { path: 'cars/:id', component: SingleCarComponent },
    { path: 'promos', component: PromosComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ]
})
export class AppRouter { }