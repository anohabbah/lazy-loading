import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../services/api.service';
import { Item } from '../../../entities/item.entity';

@Component({
  selector: 'lazy-loading-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  cards: Item[] = [];
  isLoading = false;
  loadedAll = false;
  isFirstLoading = true;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.getCards();
    this.handleScroll();
  }

  getCards(): void {
    this.isLoading = true;
    this.api.fetchItems().subscribe((res: Item[]) => {
      console.log(res);
      if (res.length)
        this.cards.push(...res);
      else
        this.loadedAll = true;

      this.isLoading = false;
      this.isFirstLoading = false;
    });
  }

  handleScroll(): void {
    window.onscroll = () => this.detectBottom();
  }

  private detectBottom(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !this.loadedAll) {
      this.api.paginate();
      this.getCards();
    }
  }
}
