import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL = 'https://orca-app-jhg4l.ondigitalocean.app/api/'

  constructor(private http: HttpClient) { }

  getCategories(){
    return this.http.get(this.BASE_URL+'category');
  }
}
