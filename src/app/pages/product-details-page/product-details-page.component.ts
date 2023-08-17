import { Component } from '@angular/core';
import { productDetailsResponse } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent {

  product: any;
  productId: any;
  IMG_BASE_URL = 'http://rjtmobile.com/grocery/images/';

  /**
   * 
   * @param dataService 
   * @param activatedRoute 
   */
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute) {
    this.productId = this.activatedRoute.snapshot.paramMap.get('productId');
    this.dataService.getProductById(this.productId).subscribe((response: productDetailsResponse) => {
      this.product = response.data;
    })
  }
}
