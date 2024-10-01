import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
// daca avem o eroare nu se va afisa pagina de html - sa fim atenti la importuri
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl: string="https://api.codebyte-software.com:2323/api/items";

  constructor(private httpClient: HttpClient) { } // browserul stie sa faca doar GET - avem nevoie de httpClient ca sa comunicam cu serverul
  // displayinfo(): void {
  //  console.log("This is a message");
  // }


  createItem(item: any){
    let body = {
      title: item.title,
      description: item.description,
      price: item.price,
      imageUrl: item.imageUrl
    };
    this.httpClient.post(this.apiUrl,body).subscribe((response: any) => {
      console.log(response);
    })
  }

  readItems(){
    this.httpClient.get(this.apiUrl).subscribe((response: any)=> {
        console.log(response);
    })
  }

  deleteItems(id: string){
    // this.httpClient.delete(this.apiUrl + "/"+id).subscribe((response: any)=> {  // sau asa - concatenare java in paranteza la delete
    this.httpClient.delete(`${this.apiUrl}/${id}`).subscribe((response: any)=> {
      console.log(response);
    })
  }



}
