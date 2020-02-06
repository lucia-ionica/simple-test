import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { BarecodeScannerLivestreamComponent } from 'ngx-barcode-scanner';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.css']
})
export class BarcodeComponent implements OnInit {

  @ViewChild(BarecodeScannerLivestreamComponent, {static: false})
  barecodeScanner: BarecodeScannerLivestreamComponent;

  barcodeValue;

  constructor() { }

  ngOnInit() {

    console.log('BARCODE init');

  }

  ngAfterViewInit() {
      this.barecodeScanner.start();

      console.log('after view init - started barecode scanner');

  }

  onValueChanges(result){
    console.log('Value has changed', result);
      this.barcodeValue = result.codeResult.code;
  }

  onStarted(started){
    console.log('onStarted event');

      console.log(started);
  }

}
