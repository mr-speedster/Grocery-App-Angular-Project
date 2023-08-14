import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL = 'https://orca-app-jhg4l.ondigitalocean.app/api/'

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any>{
    return this.http.get<any>(this.BASE_URL+'category');
  }

  getSubCategoryByCatID(catId: any): Observable<any>{
    return this.http.get<any>(this.BASE_URL+`subcategory/${catId}`);
  }

  getProductByCatID(catId: any): Observable<ProductResponse>{
    return this.http.get<ProductResponse>(this.BASE_URL+`products/cat/${catId}`);
  }

  getProductById(productId: any): Observable<any>{
    return this.http.get<any>(this.BASE_URL+`products/${productId}`)
  }
}
