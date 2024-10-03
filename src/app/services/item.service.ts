import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
// daca avem o eroare nu se va afisa pagina de html - sa fim atenti la importuri
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl: string="https://api.codebyte-software.com:2323/api/items";

  private itemsList: Array<any> = [];
  private itemSubject = new BehaviorSubject<Array<any>>([]);
  // browserul stie sa faca doar GET - avem nevoie de httpClient ca sa comunicam cu serverul
  constructor(private httpClient: HttpClient) {
    this.readItems();
  }
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
      this.readItems();
    })
  }

  readItems(){
    this.httpClient.get(this.apiUrl).subscribe((response: any)=> {
        console.log(response);
        console.log(response.data);
        // this.itemsList = response.data;
        // metoda next anunta toti abonatii (cei care au dat subscribe) ca au aparut modificari pentru aceasta lista
        this.itemSubject.next(response.data);
    })
  }

  deleteItems(id: string){
    // this.httpClient.delete(this.apiUrl + "/"+id).subscribe((response: any)=> {  // sau asa - concatenare java in paranteza la delete
    this.httpClient.delete(`${this.apiUrl}/${id}`).subscribe((response: any)=> {
      console.log(response);
      this.readItems();
    })
  }

  // getItemsList(){
  //   return this.itemsList;
  // }

  getItemsList(){
    return this.itemSubject.asObservable(); // asObservable() ne va permite sa dam subscribe si sa fim la zi cu toate modificarile
  }

  updateItem(item: any){
    let body = {
      id: item.id,
      title: item.title,
      description: item.description,
      price: item.price,
      imageUrl: item.imageUrl
    };
    this.httpClient.put(this.apiUrl,body).subscribe((response: any) => {
      console.log(response);
      this.readItems();
    })
  }

}
