import { Component } from '@angular/core';
import { IProduct, ProductResponse } from 'src/app/models/product.model';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute , Router} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products: IProduct[] = [];
  catId: any;
  IMG_BASE_URL = 'http://rjtmobile.com/grocery/images/';

  constructor(private dataService: DataService, private activatedRoute: ActivatedRoute, private router:Router) {
    this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
    this.dataService.getProductByCatID(this.catId).subscribe((response: ProductResponse) => {
      this.products = response.data;
    })
  }

  onClickProduct(product:IProduct){
    this.router.navigate(['products/details',product._id]);
  }
}
