import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// the scanner!
import { BarecodeScannerLivestreamModule } from 'ngx-barcode-scanner';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { LiniiProductieComponent } from '../../pages/linii-productie/linii-productie.component';
import { ProductsComponent } from '../../pages/products/products.component';

// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { BarcodeComponent } from 'src/app/pages/barcode/barcode.component';
import { BarcodeZxingComponent } from 'src/app/pages/barcode-zxing/barcode-zxing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    DeviceDetectorModule.forRoot(),
    BarecodeScannerLivestreamModule,
    ZXingScannerModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    LiniiProductieComponent,
    ProductsComponent,
    BarcodeComponent,
    BarcodeZxingComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
