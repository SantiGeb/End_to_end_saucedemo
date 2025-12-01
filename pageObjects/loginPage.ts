import { Page, Locator } from '@playwright/test'

export class LoginPage {

    private readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = this.page.getByPlaceholder('Username');
        this.passwordInput = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.locator('//input[@id="login-button"]');
    }

/**
 * @param userName: standard_user 
 * @param Password: secret_sauce
 */
async LoginToUsername(Username: string, Password: string) {
    await this.usernameInput.fill(Username);
    await this.passwordInput.fill(Password);
    await this.loginButton.click();
}
}