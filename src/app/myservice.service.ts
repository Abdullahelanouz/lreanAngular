import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
sayHello(componentName:string){
  console.log("Hello From the component:" + componentName);
}

}
