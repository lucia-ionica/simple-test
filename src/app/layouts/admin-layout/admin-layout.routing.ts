import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { LiniiProductieComponent } from 'src/app/pages/linii-productie/linii-productie.component';
import { ProductsComponent } from 'src/app/pages/products/products.component';
import { BarcodeComponent } from 'src/app/pages/barcode/barcode.component';
import { BarcodeZxingComponent } from 'src/app/pages/barcode-zxing/barcode-zxing.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "linii-productie", component: LiniiProductieComponent },
  { path: "barcodes", component: BarcodeComponent },
  { path: "zxing", component: BarcodeZxingComponent },
  // { path: "products", component: ProductsComponent },
  { path: 'products',
    component: ProductsComponent,
    children: [
      {
        // path => '/products'
        path: '',
        component: ProductsComponent,
      },
      {
        // path => '/products/:id'
        path: ':id',
        component: ProductsComponent
      }
    ]
  }
  // { path: "rtl", component: RtlComponent }
];
