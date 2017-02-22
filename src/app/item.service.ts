/**
 * Created by tomow on 21.02.17.
 */

import {Injectable} from "@angular/core";
import {Item} from "./item";
@Injectable()
export class ItemService {

	items: Item[] = [
		{
			"id": 1,
			"name": "book",
			"price": 10.99,
			"liked": false,
			fresh: false
		},
		{
			"id": 2,
			"name": "bulb",
			"price": 1.99,
			"liked": false,
			fresh: false
		},
		{
			"id": 3,
			"name": "window",
			"price": 200,
			"liked": false,
			fresh: false
		},
		{
			"id": 4,
			"name": "phone",
			"price": 299.50,
			"liked": false,
			fresh: false
		},
		{
			"id": 5,
			"name": "cart",
			"price": 140.99,
			"liked": false,
			fresh: false
		}
	];

	getItems(): Promise<Item[]> {
		return Promise.resolve(this.items);
	};

	addItem(item: Item): void {
		this.items.push(item);
	};

	getNextId(): number {
		return this.items[this.items.length - 1].id + 1;
	};

}

