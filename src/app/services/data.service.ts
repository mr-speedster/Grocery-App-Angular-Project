import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ProductResponse } from '../models/product.model';
import { ICategoryResponse } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL = 'https://orca-app-jhg4l.ondigitalocean.app/api/'

  /**
   * 
   * @param http 
   */
  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns 
   */
  getCategories(): Observable<ICategoryResponse> {
    return this.http.get<ICategoryResponse>(this.BASE_URL + 'category');
  }

  /**
   * 
   * @param catId 
   * @returns 
   */
  getSubCategoryByCatID(catId: any): Observable<ICategoryResponse> {
    return this.http.get<ICategoryResponse>(this.BASE_URL + `subcategory/${catId}`);
  }

  /**
   * 
   * @param catId 
   * @returns
   */
  getProductByCatID(catId: any): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(this.BASE_URL + `products/cat/${catId}`);
  }

  /**
   * 
   * @param productId 
   * @returns 
   */
  getProductById(productId: any): Observable<any> {
    return this.http.get<any>(this.BASE_URL + `products/${productId}`)
  }
}
