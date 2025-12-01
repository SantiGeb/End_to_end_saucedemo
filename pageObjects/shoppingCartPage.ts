import { Page, Locator, expect } from '@playwright/test'

export class ShoppingCartPage {

    private readonly page: Page;
    private readonly checkOut: Locator;

    constructor(page: Page) {
        this.page = page;
        this.checkOut = this.page.getByRole('button', {name: 'Checkout'})
    }
    async validatePageTitle() {
        await expect(this.page.locator('//span[@class="title"]')).toHaveText('Your Cart')
    }

    async validateItemsInCart() {
        const items = await this.page.locator('.cart_item').count()
        expect(items).toBeGreaterThanOrEqual(1);
    }

    async clickOnCheckOut() {
        await this.checkOut.click()
    }
}