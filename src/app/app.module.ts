import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyDataService } from './services/my-data.service';
import { FooterComponent } from './view/layout/footer/footer.component';
import { HeaderComponent } from './view/layout/header/header.component';
import { LeftMenuComponent } from './view/layout/left-menu/left-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LeftMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [MyDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
