import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NguCarouselModule } from '@ngu/carousel';


import { AppRouter } from './app.router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarsComponent } from './cars/cars.component';
import { ContactComponent } from './contact/contact.component';
import { PromosComponent } from './promos/promos.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CarsSidenavComponent } from './cars/cars-sidenav/cars-sidenav.component';
import { CarsViewComponent } from './cars/cars-view/cars-view.component';
import { SingleCarComponent } from './cars/cars-view/single-car/single-car.component';
import { CarsService } from './services/cars.service';
import { LoginService } from './services/login.service';
import { ContactService } from './services/contact.service';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarsComponent,
    ContactComponent,
    PromosComponent,
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    CarsSidenavComponent,
    CarsViewComponent,
    SingleCarComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouter,
    NguCarouselModule
  ],
  providers: [CarsService, LoginService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
