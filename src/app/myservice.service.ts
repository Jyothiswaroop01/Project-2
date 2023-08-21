import { Injectable } from '@angular/core';
import { Observable, catchError, map, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Route, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  url:any = 'http://localhost:3000/Data';
  url1:any = 'http://localhost:3000/Login';
  url2:any = 'http://localhost:3000/Contact';
  url3:any = 'http://localhost:3000/Cart';
  url4:any = 'http://localhost:3000/Orders';

  constructor(private objhttp:HttpClient, public router:Router) { 
    this.loadData();
  }

  public sharedData?:any;
  private dataArray: any[] = [];
  private loggedInUser: any[] = []; 
  public userData:any[]=[];

  private loadData() {
    this.objhttp.get<any[]>(this.url1).subscribe(
      (data) => {
        this.dataArray = data;
      },
      (error) => {
        console.error('Error loading data:', error);
      }
    );
  }

  login(email: string, password: string): boolean {
    const user = this.dataArray.find(u => u.email === email && u.password === password);
    if (user) {
      if(user.role == "admin")
      {
        this.loggedInUser = user;
        this.router.navigate(['adminproduct'])
      }
      else{
        this.loggedInUser = user;
        console.log(this.loggedInUser);
        this.router.navigate(['product'])
      }
      // Perform any additional actions (e.g., storing tokens) here
      return true;
    }
    return false;
  }

  getproductdata()
  {
    return this.objhttp.get<any[]>(this.url);
  }
  addproductdata(temp:any)
  {
      return this.objhttp.post<any>(this.url,temp);
  }
  addproduct(temp:any)
    {
        return this.objhttp.post<any>(this.url3,temp);
    }
    getcartdata()
    {
      return this.objhttp.get<any[]>(this.url3);
    }
    removecart(id:any)
    { 
        console.log(id);
        return this.objhttp.delete<any>(this.url3+'/' + id);
    }
    registerUser(data:any){
      return this.objhttp.post<any>(this.url2,data);
    }
    getProductById(id: number): Observable<any> {
      return this.objhttp.get(this.url+'/'+id);
    }
    updateproduct(data: any): Observable<any> {
      console.log(data)
      const url = `${this.url}/${data.id}`;
      return this.objhttp.put(url, data);
    }
  
    removeproduct(id: number): Observable<any> {
      return this.objhttp.delete<any>(this.url+'/' + id);
    }

    setSharedData(data: any) {
      this.sharedData = data; 
    }

    getSharedData(): any{
      return this.sharedData;
    }

    getUserData(){
      return this.loggedInUser;
    }

    addUser(user: any) : Observable<any> {
      console.log(user)
      return this.objhttp.post<any>(this.url1,user);
    }
    addorder(data:any) : Observable<any>{
      return this.objhttp.post<any>(this.url4,data);
    }
    getallorders(){
      return this.objhttp.get(this.url4);
    }
    getordersById(id: number): Observable<any>{
      return this.objhttp.get(this.url4+'/'+id);
    }

  getLoggedInUser() {
    return this.loggedInUser;
  }
    
  }