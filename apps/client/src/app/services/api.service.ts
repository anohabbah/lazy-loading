import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../entities/item.entity';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = 'http://localhost:3333/api/items';
  private pageNumber = 0;

  constructor(private http: HttpClient) {}

  fetchItems(): Observable<Item[]> {
    return this.http.get(
      this.baseURL,
      {
        params: new HttpParams()
          .set('pageNumber', this.pageNumber)
          .set('pageSize', 20)
      }
    )
      .pipe(map((res: { items }) => res.items));
  }

  paginate() {
    this.pageNumber++;
  }
}
