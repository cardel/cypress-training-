import {MenuContentPage,
  LoginPage,
  ProductsListPage,
  ShoppingCartPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productsListPage: ProductsListPage;
  let shoppingCartPage: ShoppingCartPage;
  let loginPage: LoginPage;
  let addressStepPage: AddressStepPage;
  let shippingStepPage: ShippingStepPage;
  let paymentStepPage: PaymentStepPage;
  const product = "Faded Short Sleeve T-shirts";

  before(() => {
    menuContentPage = new MenuContentPage();
    productsListPage = new ProductsListPage();
    shoppingCartPage = new ShoppingCartPage();
    loginPage = new LoginPage();
    addressStepPage = new AddressStepPage();
    shippingStepPage = new ShippingStepPage();
    paymentStepPage = new PaymentStepPage();
  });

  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productsListPage.addTShirtToCart(product);
    productsListPage.proceedToCheckout();

    shoppingCartPage.checkoutCart();

    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");
    addressStepPage.checkout();

    shippingStepPage.checkout();

    paymentStepPage.payByBank();
    paymentStepPage.getConfirmationMessage().should("have.text", "Your order on My Store is complete.");
  });
});
