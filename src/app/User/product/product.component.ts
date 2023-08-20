import { Component } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';
 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  items: any[] = [];
  selectedProduct: any;
  Sharedobj : any;

  fullName:string="";
  email:string="";
  password:string="";
  userdata:any;
  constructor(public serviceobj:MyserviceService, public router:Router,private location: Location) {
   }

  imgurl = 'https://th.bing.com/th/id/R.2a42d7b274bb96d8cc0976555277bea8?rik=78P3LjqrXSkA5Q&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon%2fcool-profile-icons-69.png&ehk=wSrAuMrucfij0k%2bWLPOJBjzoYz1%2bz4pIUyFZ44rWOzg%3d&risl=&pid=ImgRaw&r=0';

  contactClick(){
    this.router.navigate(['contact']);
  }
  productClick(){
    this.router.navigate(['product']);
  }
  cartClick(){
    this.router.navigate(['cart']);
  }
  profileClick(){
    this.router.navigate(['profile']);
  }

  ngOnInit(): void {
    this.userdata = this.serviceobj.getUserData();
    this.fullName = this.userdata.fullName;
    this.serviceobj.getproductdata().subscribe(data => {
      this.items = data;
    });
  }
  Addtocart(data:any){
    
    console.log(data)
    this.serviceobj.addproduct(data).subscribe(res => {
      console.log(res);
      alert('Items Added Sucessfully');
      
    }, err => {

    })
  }
  getProductDetails(productId: number) {
    this.serviceobj.getProductById(productId).subscribe(
      (data: any) => {
        this.selectedProduct = data;
      },
      (      error: any) => {
        console.error(error);
      }
    );
  }
  logout() {
    this.router.navigate(['/login']);
    this.location.replaceState('/');
  }
}