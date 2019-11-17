import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridComponent } from './components/containers/grid/grid.component';
import { CardComponent } from './components/presentationals/card/card.component';
import { CardShimmerComponent } from './components/presentationals/card-shimmer/card-shimmer.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [AppComponent, GridComponent, CardComponent, CardShimmerComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
