import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories: any = [];

  IMG_BASE_URL = 'http://rjtmobile.com/grocery/images/';

  /**
   * 
   * @param dataService 
   * @param router 
   */
  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getCategories().subscribe((response: any) => {
      this.categories = response.data;
    })
  }

  /**
   * 
   * @param category 
   */
  onClickCategory(category: any) {
    this.router.navigate(['/products', category.catId]);
  }

}
