import {MenuContentPage,
  LoginPage,
  ProductsListPage,
  ShoppingCartPage,
  AddressStepPage,
  ShippingStepPage,
  PaymentStepPage,
} from "../page/index";

const menuContentPage = new MenuContentPage();
const productsListPage = new ProductsListPage();
const shoppingCartPage = new ShoppingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingStepPage = new ShippingStepPage();
const paymentStepPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    menuContentPage.visitMenuContentPage();
    menuContentPage.goToTShirtMenu();

    productsListPage.addToCart();
    productsListPage.checkout();

    shoppingCartPage.checkoutCart();

    loginPage.login("aperdomobo@gmail.com", "WorkshopProtractor");
    addressStepPage.checkout();

    shippingStepPage.checkout();

    paymentStepPage.payByBank();
    paymentStepPage.getConfirmationMessage().should("have.text", "Your order on My Store is complete.");
  });
});
