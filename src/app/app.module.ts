import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoryComponent } from './components/category/category.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProductsComponent } from './components/products/products.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';
import { SliderComponent } from './components/slider/slider.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CategoryComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductDetailsPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    ProductsComponent,
    SubCategoryComponent,
    SliderComponent,
    SearchBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
