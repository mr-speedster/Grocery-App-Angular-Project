import { Component } from '@angular/core';
import { IProduct, productDetailsResponse } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent {

  product: any;
  productId = '5de4a2b6a32d0906687812ea';
  IMG_BASE_URL = 'http://rjtmobile.com/grocery/images/';

  constructor(private dataService: DataService) {
    this.dataService.getProductById(this.productId).subscribe((response: productDetailsResponse) => {
      this.product = response.data;
    })
  }
}
