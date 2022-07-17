type DeliveryOptions = ShopDelivery | HomeDelivery;

class Product {
  constructor(public id: number, public name: string, public price: number) {}
}

class Delivery {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
  constructor(date: Date, public adrress: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  constructor(public shopId: number) {
    super(new Date());
  }
}

class Cart {
  private products: Product[] = [];
  private delivery: DeliveryOptions;

  constructor() {}

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public deleteProduct(id: number): void {
    this.products.filter((x) => x.id !== id);
  }

  public getAmountOfProducts(): number {
    return this.products.length;
  }

  public getSumOfProducts(): number {
    return this.products.reduce((acc, x) => acc + x.price, 0);
  }

  public setDelivery(): void {}

  public checkOut() {
    if (!this.products.length) {
      throw new Error("No items in the bucket");
    }

    if (!this.delivery) {
      throw new Error("No delivery options is choosen");
    }

    return { success: true };
  }
}
