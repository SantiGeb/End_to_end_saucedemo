import { Page, Locator, expect } from '@playwright/test'

export class CheckOutOverview {

    private readonly page: Page;
    private readonly finishButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.finishButton = this.page.getByRole('button', {name: 'Finish'})
    }

    async validatePageTitle() {
        await expect(this.page.locator('//span[@class="title"]')).toHaveText('Checkout: Overview')
    }

    async clickFinishButtonCheckOut() {
        await this.finishButton.click()
    }
}