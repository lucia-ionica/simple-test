import { Component, OnInit } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';

import { AppService } from './../../services/app.service';
import { ProductsService } from './../../services/products.service';

import { Product, Products } from 'src/app/models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  // tslint:disable-next-line:prettier
  products = [];

  statuses = ['Activa', 'Oprita', 'Intrerupere'];
  public isMobile = false;
  public hasMoreResults = false;
  private currentPage = 1;
  private totalResults = 0;
  private itemId = '';

  private emptyItem: Product = {
    id: '0',
    createdAt: '',
    name: 'NA',
    linie: 'NA',
  };

  private emptyItems: Products = {
    startIndex: 0,
    totalResults: 0,
    itemsPerPage: 0,
    items: [],
  };

  constructor(private deviceService: DeviceDetectorService,
    private prodService: ProductsService,
    private appService: AppService
  ) {
    console.log('Constructor linii productie');
      this.isMobile = this.deviceService.isMobile();
  }

  loadAll() {
    this.loadLines();
  }

  private loadLines() {
    // reset results
    this.hasMoreResults = false;
    this.totalResults = 0;
    return this.prodService.getProducts(10, 1).pipe().subscribe(
      data => {
      //  console.log('lines', data);
       this.products = data
      }
    );
  }

  private loadNextBatch() { }

  // click on line
  showDetails(itemId: string) {
    this.itemId = this.itemId === itemId ? '' : itemId;
  }

  private _hasMoreResults(): boolean {
    // console.log('HAS MORE RES CHECK');
    if (this.totalResults > this.currentPage * 10) {
      return true;
    }

    return false;
  }

  ngOnInit() { }
}
