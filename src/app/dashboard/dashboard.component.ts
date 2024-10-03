import { Component } from '@angular/core';
import {AddEditItemComponent} from "../add-edit-item/add-edit-item.component";
import {ListItemsComponent} from "../list-items/list-items.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AddEditItemComponent,
    ListItemsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

    itemDashboard : any;
    constructor() {}

    // itemParam este elementul primit cu ajutorul EventEmitter definit in list-items-component.ts
    onReceiveItem(itemParam: any){
      console.log("DashboardComponent - onReceiveItem()");
      console.log(itemParam);
      this.itemDashboard = itemParam;
    }

}
