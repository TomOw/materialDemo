/**
 * Created by tomow on 21.02.17.
 */

export class Item {

  id: number;
  name: string;
  price: number;
  liked: boolean;


  constructor(id: number, name: string, price: number, liked: boolean) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.liked = liked;
  }
}
