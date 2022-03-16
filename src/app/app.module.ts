import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardPageComponent } from './pages/board-page/board-page.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { CardPopUpComponent } from './pages/card-pop-up/card-pop-up.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    BoardPageComponent,
    CardPopUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    DragDropModule, 
    HttpClientModule, 
    FormsModule, 
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
