import { Page, Locator } from '@playwright/test'

export class CheckOutPage {

    private readonly page: Page;
    private readonly firstNameInput: Locator;
    private readonly lastNameInput: Locator;
    private readonly zipPostalInput: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = this.page.getByPlaceholder('First Name');
        this.lastNameInput = this.page.getByPlaceholder('Last Name');
        this.zipPostalInput = this.page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = this.page.getByRole('button', {name: 'continue'});
    }

    async checkOutInformation(FirstName: string, LastName: string, PostalCode: string) {
        await this.firstNameInput.fill(FirstName);
        await this.lastNameInput.fill(LastName);
        await this.zipPostalInput.fill(PostalCode);
    }

    async clickContinueInCheckOut() {
        await this.continueButton.click();
    }
}