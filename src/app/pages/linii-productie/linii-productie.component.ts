import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';

import { AppService } from './../../services/app.service';
import { LiniiProductieService } from './../../services/linii-productie.service';

import { LinieProductie, LiniiProductie } from 'src/app/models/linie-productie.model';

@Component({
  selector: 'app-linii-productie',
  templateUrl: './linii-productie.component.html',
  styleUrls: ['./linii-productie.component.css']
})

export class LiniiProductieComponent implements OnInit, OnDestroy {
  // tslint:disable-next-line:prettier
  lines = [];

  statuses = ['Activa', 'Oprita', 'Intrerupere'];
  public isMobile = false;
  public hasMoreResults = false;
  private currentPage = 1;
  private totalResults = 0;
  private itemId = '';
  // private liniiProductie$: Observable<LinieProductie[] | boolean>;

  private emptyLine: LinieProductie = {
    line_id: '',
    id: '0',
    createdAt: '',
    name: 'NA',
    sef_linie: 'NA',
  };

  private emptyLines: LiniiProductie = {
    startIndex: 0,
    totalResults: 0,
    itemsPerPage: 0,
    items: [],
  };

  constructor(private deviceService: DeviceDetectorService,
    private linesService: LiniiProductieService,
    private appService: AppService
  ) {
    console.log('Constructor linii productie');
      this.isMobile = this.deviceService.isMobile();
  }

  private loadLines() {
    // reset results
    this.hasMoreResults = false;
    this.totalResults = 0;
    return this.linesService.getProductionLines(10, 1).pipe().subscribe(
      data => {
      //  console.log('lines', data);
       this.lines = data
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

  ngOnInit() {
    this.loadLines();
  }
  ngOnDestroy() { }
}
