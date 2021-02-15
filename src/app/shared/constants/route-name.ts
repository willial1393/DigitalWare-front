class RouteNameApp {
  PAGE404 = 'page-no-found';
}

class RouteNameDashboard {
  ROOT = '';
  HOME = 'inicio';
  HOME_ROOT = this.ROOT + '/' + this.HOME;
}

class RouteNameCustomer {
  ROOT = 'clientes';
  HOME = 'inicio';
  HOME_ROOT = this.ROOT + '/' + this.HOME;
}

class RouteNameReport {
  ROOT = 'reportes';
  HOME = 'inicio';
  HOME_ROOT = this.ROOT + '/' + this.HOME;
}

class RouteNameSales {
  ROOT = 'ventas';
  HOME = 'inicio';
  HOME_ROOT = this.ROOT + '/' + this.HOME;
}

class RouteNameStock {
  ROOT = 'inventario';
  HOME = 'inicio';
  HOME_ROOT = this.ROOT + '/' + this.HOME;
  PRODUCT = 'producto';
}

export class RouteName {
  static APP = new RouteNameApp();
  static DASHBOARD = new RouteNameDashboard();
  static CUSTOMER = new RouteNameCustomer();
  static REPORT = new RouteNameReport();
  static SALES = new RouteNameSales();
  static STOCK = new RouteNameStock();
}


