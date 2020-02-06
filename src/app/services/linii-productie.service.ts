import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

import { environment } from './../../environments/environment';
import { LinieProductie } from '../models/linie-productie.model';


@Injectable({
  providedIn: 'root',
})
export class LiniiProductieService {
  constructor(private http: HttpClient) {}

  getProductionLines(itemsPerPage = 10, page = 0, status = ''): Observable<LinieProductie[]> {
    // console.log('Calling the get production lines api', page);
    let url = environment.serverSite + 'api/linii-productie/' + itemsPerPage + '/' + page;
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

  getProductionLine(line: LinieProductie): Observable<LinieProductie> {
    // console.log('Calling the order payment API for: ', order.id);
    return this.http.get(environment.serverSite + 'api/linie-productie/' + line.id).pipe(
      map((payload: any) => {
        return payload;
      })
    );
  }
}
