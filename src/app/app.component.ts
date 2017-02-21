import {Component, OnInit} from "@angular/core";
import {Item} from "./item";
import {Http} from "@angular/http";
import {MdDialog} from "@angular/material";
import {AddItemDialogComponent} from "./add-item-dialog.component";
import {ItemService} from "./item.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  items: Item[];

  newItem: Item;

  constructor(private itemService: ItemService, private http: Http, private mdDialog: MdDialog) {
  };

  ngOnInit(): void {
    this.getItems();
  };

  openDialog(){
    let dialog = this.mdDialog.open(AddItemDialogComponent);
    dialog.afterClosed().subscribe(newItem => {
      this.newItem = newItem;
      this.newItem.id = this.itemService.getNextId();
      this.itemService.addItem(newItem);
      console.log(newItem);
    })
  }

  private getItems(): void {
    this.itemService.getItems().then(items => this.items = items);
  }

  like(i): void {
    this.items[i].liked = !this.items[i].liked;
    console.log('liked ' + this.items[i].name);
  };

  deleteItem(i): void {
    this.items.splice(i, 1);
  }
}
