import { Component, Input } from '@angular/core';
import { IProduct, ProductResponse } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: IProduct[] = [];
  catId: any;
  IMG_BASE_URL = 'http://rjtmobile.com/grocery/images/';

  @Input()
  searchText:string = '';

  @Input()
  selectedSubCategoryId:any;

  /**
   * 
   * @param dataService 
   * @param activatedRoute 
   * @param router 
   */
  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
    this.dataService.getProductByCatID(this.catId).subscribe((response: ProductResponse) => {
      this.products = response.data;
    })
  }

  /**
   * 
   * @param product 
   */
  onClickProduct(product: IProduct) {
    this.router.navigate(['products/details', product._id]);
  }
}
