import { Page } from '@playwright/test'
import { LoginPage } from '../pageObjects/loginPage'
import { ProductPage } from '../pageObjects/productsPage'
import { ShoppingCartPage } from '../pageObjects/shoppingCartPage'
import { CheckOutPage } from '../pageObjects/checkOutPage'
import { CheckOutOverview } from '../pageObjects/checkOutOverview'
import { CheckOutComplete } from '../pageObjects/checOutComplete'

export class PageManager {

    private readonly page: Page;
    private readonly loginPage: LoginPage;
    private readonly productPage: ProductPage;
    private readonly shoppingCartPage: ShoppingCartPage;
    private readonly checkOutPage: CheckOutPage;
    private readonly checkOutOverview: CheckOutOverview;
    private readonly checkOutComplete: CheckOutComplete;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.productPage = new ProductPage(page);
        this.shoppingCartPage = new ShoppingCartPage(page);
        this.checkOutPage = new CheckOutPage(page);
        this.checkOutOverview = new CheckOutOverview(page);
        this.checkOutComplete = new CheckOutComplete(page);
    }

    onLoginPage() {
        return this.loginPage;
    }

    onProductPage() {
        return this.productPage;
    }

    onShoppingCartPage() {
        return this.shoppingCartPage;
    }

    onCheckOutPage() {
        return this.checkOutPage;
    }

    onCheckOutOverview() {
        return this.checkOutOverview;
    }

    onCheckOutComplete() {
        return this.checkOutComplete;
    }
}