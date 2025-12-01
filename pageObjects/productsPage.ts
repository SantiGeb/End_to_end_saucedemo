import { Page, Locator, expect } from '@playwright/test'

export class ProductPage {

    private readonly page: Page;
    private readonly shoppingCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.shoppingCart = this.page.locator('.shopping_cart_container')
    }
    async validatePageTitle() {
        await expect(this.page.locator('//span[@class="title"]')).toHaveText('Products')
    }

    async addBackPackToCart(ItemName: string) {
        await this.page.locator('.inventory_item').filter({hasText: ItemName}).getByRole('button', {name: 'Add to cart'}).click()
    }

    async clickShoppingCart() {
        await this.shoppingCart.click()
    }
}