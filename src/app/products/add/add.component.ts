import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  constructor(private route:Router,private builder:FormBuilder){}
  addProductForm=this.builder.group({
    proname:this.builder.control('',Validators.compose([Validators.required,])),
    price:this.builder.control('',Validators.compose([Validators.required]))
  });

  processNewProduct(){
    console.warn(this.addProductForm.value);
  }

}
