import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HikingPlacesComponent } from './hiking-places/hiking-places.component';
import { Places4x4Component } from './places4x4/places4x4.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {	
   path:'HikingPlaces',
   component: HikingPlacesComponent
    },
   {
   path:'Places4x4',
   component: Places4x4Component
   },
   {
   path:'Gallery',
   component: GalleryComponent
   },
    {path:'Home',
    component: HomePageComponent},
    {path:'Product',
    component:ProductPageComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HikingPlacesComponent,
    Places4x4Component,
    GalleryComponent,
    HomePageComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
