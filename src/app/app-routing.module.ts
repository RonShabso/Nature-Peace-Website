import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
