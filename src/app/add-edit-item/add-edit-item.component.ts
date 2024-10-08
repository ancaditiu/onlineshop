import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {ItemService} from "../item.service";

@Component({
  selector: 'app-add-edit-item', // il folosim pentru a apela componenta de angular in celelalte : <app-add-edit-item> </app-add-edit-item>
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  templateUrl: './add-edit-item.component.html',
  styleUrl: './add-edit-item.component.css'
})
export class AddEditItemComponent implements OnChanges {
  // value: string = "salut";
  title: string = "";
  description: string = "";
  price: number=0;
  imageUrl: string ="";
  @Input() item:any; // creaza un atribut pentru tag-ul de html; exemplu: class, style, name etc

  constructor(private itemService: ItemService) {
    // eu: dependency injection - ajuta sa nu mai cream obiectul - nu mai cream noi cu new - se creaza singur daca clasa (in cazul nostru item.service) are "injectable"
    // trainer: dependency injection - ne ajuta injectam obiecte in constructori
    // angular se va ocupa de initializarea lor ( corespondent Bean din Java Spring)
  }

  // in typescript intai scriem numele si apoi tipul variabilei si apoi valoarea
  // in typescript variabilele pot fi initializate direct cu valoare, fara tip, si se atribuie tipul in functie de valoare
  // value = "";
  // value = 1;
  // value = 'salut'; // in typescript string se scrie si intre ' ' nu doar intre " "

  // metoda
  showValue(){
    // console.log(this.value) // console.log e echivalent system.out.println din java
    console.log(this.title);
    console.log(this.description);
    console.log(this.price);
    console.log(this.imageUrl);

    // this.itemService.displayinfo(); // ; in typescript e optional

    let item={
      title:this.title,
      description:this.description,
      price:this.price,
      imageUrl: this.imageUrl
    };

    this.itemService.createItem(item);
  }

  submitForm(){
    let body={
      id: this.item != null ? this.item.id : "",
      title:this.title,
      description:this.description,
      price:this.price,
      imageUrl: this.imageUrl
    };
    if(body.id == ""){
      this.itemService.createItem(body);
    } else {
      this.itemService.updateItem(body);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    // aceasta metoda se apeleaza atunci cand elementele de la @Input() se schimba
    console.log("ngOnChanges()");

    console.log(this.item);
    if(this.item != null){
      console.log("am primit o valoare noua pentru item dupa ce am apasat butonul edit")
      this.title = this.item.title;
      this.description = this.item.description;
      this.price = this.item.price;
      this.imageUrl = this.item.imageUrl;
    }
  }


}
