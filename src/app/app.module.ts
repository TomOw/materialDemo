import 'hammerjs';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {MaterialModule} from "@angular/material";
import {AddItemDialogComponent} from "./add-item-dialog.component";
import {ItemService} from "./item.service";

@NgModule({
  declarations: [
    AppComponent,
    AddItemDialogComponent
  ],
  entryComponents: [
    AddItemDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
