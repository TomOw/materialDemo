/**
 * Created by tomow on 21.02.17.
 */
import {Component} from "@angular/core";
import {MdDialogRef} from "@angular/material";
import {Item} from "./item";
@Component({
  selector: 'add-item-dialog',
  templateUrl: '../app/add-item-dialog.component.html'
})

export class AddItemDialogComponent {

  constructor(public dialog: MdDialogRef<AddItemDialogComponent>){}

  newItem: Item = new Item(0, '', 0, false);
}
