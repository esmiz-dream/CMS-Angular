import { Component } from '@angular/core';
import {faMagic, faList,faMap,faPlus, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import {ProductsDataService} from '../../services/products-data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css','../../customers/list/list.component.css']
})
export class ListComponent {
  faproduct=faMagic;
  faTrash=faTrash;
  faList=faList;
  faPlus=faPlus;
  faEdit=faEdit;
  faMap=faMap;
  view:string="card";
  products:any;
  viewType(data:string){
   this.view=data;
  }

  constructor(private proData:ProductsDataService, ){
    this.getProducts();
  }

  getProducts(){
    this.proData.getProduct().subscribe((result)=>{

     this.products=result;
     console.warn("result="+result);
    });
  }

}
