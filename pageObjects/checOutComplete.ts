import { Page, expect } from '@playwright/test'

export class CheckOutComplete {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async validatePageTitle() {
        await expect(this.page.locator('//span[@class="title"]')).toHaveText('Checkout: Complete!')
    }

}