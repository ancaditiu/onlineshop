import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";

@Component({
  selector: 'app-add-edit-item', // il folosim pentru a apela componenta de angular: <app-add-edit-item> </app-add-edit-item>
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
export class AddEditItemComponent {
  // value: string = "salut";
  title: string = "";
  description: string = "";
  price: number=0;
  imageUrl: string ="";

  // in typescript intai scriem numele si apoi tipul variabilei si apoi valoarea
  // in typescript variabilele pot fi initializate direct cu valoare, fara tip, si se atribuie tipul in functie de valoare
  // value = "";
  // value = 1;
  // value = 'salut'; // in typescript string se scrie si intre ' ' nu doar intre " "

  //metoda
  showValue(){
    // console.log(this.value) // console.log e echivalent system.out.println din java
    console.log(this.title)
    console.log(this.description)
    console.log(this.price)
    console.log(this.imageUrl)
  }
}
