"use strict";(self.webpackChunkcustomerManagementSystem=self.webpackChunkcustomerManagementSystem||[]).push([[953],{5953:(P,u,c)=>{c.r(u),c.d(u,{ProductsModule:()=>x});var s=c(6814),r=c(95),l=c(5597),p=c(594),t=c(9468);let m=(()=>{class o{constructor(e,n){this.route=e,this.builder=n,this.addProductForm=this.builder.group({proname:this.builder.control("",r.kI.compose([r.kI.required])),price:this.builder.control("",r.kI.compose([r.kI.required]))})}processNewProduct(){console.warn(this.addProductForm.value)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(p.F0),t.Y36(r.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add"]],decls:15,vars:2,consts:[[1,"addproduct"],[1,"add-order-form"],[3,"formGroup","ngSubmit"],[1,"mb-3"],["for","exampleFormControlInput1",1,"form-label"],["type","text","required","","name","name","placeholder","your name","formControlName","proname",1,"form-control"],["type","number","required","","placeholder","phone","formControlName","price",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h3"),t._uU(2,"New Product"),t.qZA(),t.TgZ(3,"div",1)(4,"form",2),t.NdJ("ngSubmit",function(){return n.processNewProduct()}),t.TgZ(5,"div",3)(6,"label",4),t._uU(7,"Product Name"),t.qZA(),t._UZ(8,"input",5),t.qZA(),t.TgZ(9,"div",3)(10,"label",4),t._uU(11,"Price"),t.qZA(),t._UZ(12,"input",6),t.qZA(),t.TgZ(13,"button",7),t._uU(14,"Register"),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("formGroup",n.addProductForm),t.xp6(9),t.Q6J("disabled",n.addProductForm.invalid))},dependencies:[r._Y,r.Fj,r.wV,r.JJ,r.JL,r.Q7,r.sg,r.u],styles:[".addproduct[_ngcontent-%COMP%]{padding-left:50px;padding-top:30px;padding-bottom:20px;max-width:800px;min-width:500px}"]}),o})();var d=c(590),f=c(871);function g(o,i){if(1&o&&(t.TgZ(0,"div",8)(1,"div",9)(2,"h5",10),t._uU(3),t.qZA(),t.TgZ(4,"a",11),t._UZ(5,"fa-icon",0),t.qZA()(),t.TgZ(6,"div",12)(7,"h6",13),t._uU(8),t.qZA(),t.TgZ(9,"h6",13),t._uU(10),t.qZA(),t.TgZ(11,"a",14),t._uU(12,"View product"),t.qZA()()()),2&o){const e=i.$implicit,n=t.oxw(2);t.xp6(3),t.Oqu(e.name),t.xp6(2),t.Q6J("icon",n.faEdit),t.xp6(3),t.hij("",e.name,","),t.xp6(2),t.Oqu(e.price)}}function _(o,i){if(1&o&&(t.TgZ(0,"div",6),t.YNc(1,g,13,4,"div",7),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.products)}}function Z(o,i){if(1&o&&(t.TgZ(0,"tr")(1,"th",20),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"a",21),t._uU(9,"order"),t.qZA(),t.TgZ(10,"a",22),t._UZ(11,"fa-icon",0),t.qZA()()()),2&o){const e=i.$implicit,n=i.index,a=t.oxw(2);t.xp6(2),t.Oqu(n),t.xp6(2),t.hij(" ",e.name," "),t.xp6(2),t.hij(" ",e.price," "),t.xp6(5),t.Q6J("icon",a.faTrash)}}function h(o,i){if(1&o&&(t.TgZ(0,"div",15)(1,"table",16)(2,"thead")(3,"tr")(4,"th",17),t._uU(5,"#"),t.qZA(),t.TgZ(6,"th",17),t._uU(7,"Product Name"),t.qZA(),t.TgZ(8,"th",17),t._uU(9,"Price"),t.qZA()()(),t.TgZ(10,"tbody",18),t.YNc(11,Z,12,4,"tr",19),t.qZA()()()),2&o){const e=t.oxw();t.xp6(11),t.Q6J("ngForOf",e.products)}}const v=[{path:"",children:[{path:"",component:(()=>{class o{viewType(e){this.view=e}constructor(e){this.proData=e,this.faproduct=d.een,this.faTrash=d.$aW,this.faList=d.Zrf,this.faPlus=d.r8p,this.faEdit=d.Xcf,this.faMap=d.Wx7,this.view="card",this.getProducts()}getProducts(){this.proData.getProduct().subscribe(e=>{this.products=e,console.warn("result="+e)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(f.s))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list"]],decls:23,vars:6,consts:[[3,"icon"],[1,"nav"],[3,"click"],["routerLink","add"],["class","card-container",4,"ngIf"],["class","list-view",4,"ngIf"],[1,"card-container"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"card-header"],[1,"card-title"],["routerLink","",1,"edit-icon"],[1,"card-body"],[1,"card-subtitle","mb-2","text-body-secondary"],["routerLink","products/products",1,"card-link"],[1,"list-view"],[1,"table"],["scope","col"],[1,"table-group-divider"],[4,"ngFor","ngForOf"],["scope","row"],["type","submit"],["routerLink","products/delete"]],template:function(e,n){1&e&&(t.TgZ(0,"div")(1,"h3"),t._UZ(2,"fa-icon",0),t._uU(3,"Products"),t.qZA(),t.TgZ(4,"ul",1)(5,"li")(6,"a",2),t.NdJ("click",function(){return n.viewType("card")}),t._uU(7,"Card View"),t.qZA()(),t.TgZ(8,"li")(9,"a",2),t.NdJ("click",function(){return n.viewType("list")}),t._UZ(10,"fa-icon",0),t._uU(11," List View"),t.qZA()(),t.TgZ(12,"li")(13,"a",2),t.NdJ("click",function(){return n.viewType("map")}),t._UZ(14,"fa-icon",0),t._uU(15," Map View"),t.qZA()(),t.TgZ(16,"li")(17,"a",3),t._UZ(18,"fa-icon",0),t._uU(19," New Product"),t.qZA()()()(),t._UZ(20,"hr"),t.YNc(21,_,2,1,"div",4),t.YNc(22,h,12,1,"div",5)),2&e&&(t.xp6(2),t.Q6J("icon",n.faproduct),t.xp6(8),t.Q6J("icon",n.faList),t.xp6(4),t.Q6J("icon",n.faMap),t.xp6(4),t.Q6J("icon",n.faPlus),t.xp6(3),t.Q6J("ngIf","card"===n.view),t.xp6(1),t.Q6J("ngIf","list"===n.view))},dependencies:[s.sg,s.O5,p.rH,l.BN],styles:[".card-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;column-gap:20px;row-gap:15px}.card-header[_ngcontent-%COMP%]{background-color:#00f;color:#fff;display:flex;flex-direction:row;justify-content:space-between}.card[_ngcontent-%COMP%]{width:25rem}.nav[_ngcontent-%COMP%]{list-style-type:none;padding-left:50px}.nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding-right:2rem}div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{padding-top:20px;padding-left:30px;padding-bottom:8px}.edit-icon[_ngcontent-%COMP%]{text-decoration:none;color:#fff}.nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}.list-view[_ngcontent-%COMP%], .card-container[_ngcontent-%COMP%]{padding-left:50px}.list-view[_ngcontent-%COMP%]{max-width:1000px}.err-msg[_ngcontent-%COMP%]{color:red}td[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;color:#00f;padding-right:10px}"]}),o})()},{path:"add",component:m},{path:"detaile",component:(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-detaile"]],decls:2,vars:0,template:function(e,n){1&e&&(t.TgZ(0,"p"),t._uU(1,"detaile works!"),t.qZA())}}),o})()}]}];let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(v),p.Bz]}),o})(),x=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,C,r.UX,l.uH,r.u5]}),o})()}}]);