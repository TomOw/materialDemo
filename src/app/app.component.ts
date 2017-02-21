import {Component, OnInit} from "@angular/core";
import {Item} from "./item";
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  items: Item[];


  constructor(private http: Http) {
  };

  ngOnInit(): void {
    this.getData();
  };

  getData(): void {
    this.http.get('../app/data.json')
      .map(response => response.json())
      .subscribe(res => this.items = res);
  };

  like(i): void {
    this.items[i].liked = !this.items[i].liked;
    console.log('liked ' + this.items[i].name);
  };

  deleteItem(i): void {
    this.items.splice(i, 1);
  }
}
