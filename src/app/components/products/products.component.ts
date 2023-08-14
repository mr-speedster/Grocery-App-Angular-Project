import { Component } from '@angular/core';
import { IProduct, ProductResponse } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: IProduct[] = [];
  catId = 3;
  IMG_BASE_URL = 'http://rjtmobile.com/grocery/images/';

  constructor(private dataService: DataService) {
    this.dataService.getProductByCatID(this.catId).subscribe((response: ProductResponse) => {
      this.products = response.data;
    })
  }
}
