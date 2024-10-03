import {Component, EventEmitter, Output} from '@angular/core';
import {ItemService} from "../item.service";
import {NgForOf} from "@angular/common";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [
    NgForOf,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {

  // proprietatile sunt primele, ca si in java

  itemsList: Array<any> = [];
  // EventEmitter ne ajuta sa trimitem obiecte / evenimente in exteriorul componentei curente
  // de aici avem si @Output()
  // pentru a emite un eveniment folosim metoda emit();
  @Output() onEditEvent: EventEmitter<any> = new EventEmitter<any>();


  constructor(private itemService: ItemService) {
      // this.itemsList.push("item 1");
      // this.itemsList.push("item 2");
      // this.itemsList.push("item 3");
      // this.itemsList.push("item 4");
      // this.itemsList.push("item 5");
      // console.log(this.itemsList);

      // this.itemService.readItems();

    // fix temporar - nerecomandat
    //   setTimeout(()=> {
    //     this.itemsList = this.itemService.getItemsList();
    //     console.log(this.itemsList);
    //     }, 2000); // 2000 = 2 sec

    // folosind subscribe ne abonam sa primim toate modificarile listei atunci cand vin de la server
    this.itemService.getItemsList().subscribe((items:Array<any>)=> {
      console.log("Subscribed component that received items list");
      this.itemsList = items;
    })
  }

  onDeleteItem(id : string) {
    // alert("Attention! " + id);
    this.itemService.deleteItems(id);
  }

  onEditItem(item : any){
    console.log("List items - onEditItem()");
    this.onEditEvent.emit(item);
  }

}
