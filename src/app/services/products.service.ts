import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { environment } from './../../environments/environment';
import { Product, Products } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {}

  getProducts(itemsPerPage = 10, page = 0, status = ''): Observable<Product[]> {
    // console.log('Calling the get production lines api', page);
    let url = environment.serverSite + 'api/products/' + itemsPerPage + '/' + page;
    if (status) {
      url = url + '/' + status;
    }
    return this.http.get(url).pipe(
      map((payload: any) => {
        // console.log('getProductionLines payload', payload);
        return payload.data;
      })
    );
  }

  getProductionLine(item: Product): Observable<Product> {
    // console.log('Calling the order payment API for: ', order.id);
    return this.http.get(environment.serverSite + 'api/product/' + item.id).pipe(
      map((payload: any) => {
        return payload;
      })
    );
  }
}
