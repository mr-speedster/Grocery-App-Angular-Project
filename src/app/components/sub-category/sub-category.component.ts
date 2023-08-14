import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.css']
})
export class SubCategoryComponent {
  
  catId = 3;

  subCategories:any[] = [];

  constructor(private dataService: DataService){
    this.dataService.getSubCategoryByCatID(this.catId).subscribe((response:any)=>{
      this.subCategories = response.data
    })
  }
}
