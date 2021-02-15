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
  CUSTOMER = 'cliente';
}

class RouteNameSales {
  ROOT = 'ventas';
  HOME = 'inicio';
  HOME_ROOT = this.ROOT + '/' + this.HOME;
  FORM = 'factura';
  VIEW = 'ver-factura';
}

class RouteNameStock {
  ROOT = 'inventario';
  HOME = 'inicio';
  HOME_ROOT = this.ROOT + '/' + this.HOME;
  PRODUCT = 'producto';
  HISTORY = 'historial';
  ADD_UNITS = 'agregar-unidades';
}

export class RouteName {
  static APP = new RouteNameApp();
  static DASHBOARD = new RouteNameDashboard();
  static CUSTOMER = new RouteNameCustomer();
  static SALES = new RouteNameSales();
  static STOCK = new RouteNameStock();
}


