import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-barcode-zxing',
  templateUrl: './barcode-zxing.component.html',
  styleUrls: ['./barcode-zxing.component.css']
})
export class BarcodeZxingComponent implements OnInit {
  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo = null;
  formatsEnabled: BarcodeFormat[] = [
    BarcodeFormat.CODE_128,
    BarcodeFormat.DATA_MATRIX,
    BarcodeFormat.EAN_13,
    BarcodeFormat.QR_CODE,
  ];

  hasDevices: boolean;
  hasPermission: boolean;

  qrResultString: string;

  constructor() { }

  ngOnInit() {
  }

  clearResult(): void {
    this.qrResultString = null;
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
  }

  onCodeResult(resultString: string) {
    console.log('Received result: ', resultString);
    this.qrResultString = resultString;
  }

  onDeviceSelectChange(selected: string) {
    const device = this.availableDevices.find(x => x.deviceId === selected);
    this.currentDevice = device || null;
  }

  // openFormatsDialog() {
  //   const data = {
  //     formatsEnabled: this.formatsEnabled,
  //   };

  //   this._dialog
  //     .open(FormatsDialogComponent, { data })
  //     .afterClosed()
  //     .subscribe(x => { if (x) { this.formatsEnabled = x; } });
  // }

  onHasPermission(has: boolean) {
    this.hasPermission = has;
  }

  // openInfoDialog() {
  //   const data = {
  //     hasDevices: this.hasDevices,
  //     hasPermission: this.hasPermission,
  //   };

  //   this._dialog.open(AppInfoDialogComponent, { data });
  // }

  // onTorchCompatible(isCompatible: boolean): void {
  //   this.torchAvailable$.next(isCompatible || false);
  // }

  // toggleTorch(): void {
  //   this.torchEnabled = !this.torchEnabled;
  // }

  // toggleTryHarder(): void {
  //   this.tryHarder = !this.tryHarder;
  // }  

}
