import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  rtlTitle?: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/icons",
    title: "Icons",
    icon: "icon-atom",
    class: ""
  },
  // {
  //   path: "/maps",
  //   title: "Maps",
  //   icon: "icon-pin",
  //   class: "" 
  // },
  {
    path: "/notifications",
    title: "Notifications",
    icon: "icon-bell-55",
    class: ""
  },

  {
    path: "/user",
    title: "User Profile",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/tables",
    title: "Table List",
    icon: "icon-puzzle-10",
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",
    icon: "icon-align-center",
    class: ""
  },
  {
    path: "/linii-productie",
    title: "Linii Productie",
    icon: "icon-bullet-list-67",
    class: ""
  },
  {
    path: "/products",
    title: "Produse",
    icon: "icon-vector",
    class: ""
  },
  {
    path: "/barcodes",
    title: "Barcodes",
    icon: "icon-chart-bar-32",
    class: ""
  },
  {
    path: "/zxing",
    title: "Barcodes zxing",
    icon: "icon-chart-bar-32",
    class: ""
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
