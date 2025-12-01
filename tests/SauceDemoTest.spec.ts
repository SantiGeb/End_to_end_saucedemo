import { test, expect } from '@playwright/test'
import { PageManager } from '../pageObjects/pageManager'

test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/')
    expect(page.getByText('Swag Labs')).toBeVisible();
})

test('TC01 Complete Purchase User Flow', async ({page}) => {
    const pm = new PageManager(page);
    await pm.onLoginPage().LoginToUsername('standard_user', 'secret_sauce');
    await pm.onProductPage().validatePageTitle();
    await pm.onProductPage().addBackPackToCart('Sauce Labs Backpack');
    await pm.onProductPage().clickShoppingCart();
    await pm.onShoppingCartPage().validatePageTitle();
    await pm.onShoppingCartPage().validateItemsInCart();
    await pm.onShoppingCartPage().clickOnCheckOut();
    await pm.onCheckOutPage().checkOutInformation('Santiago', 'Garza', '45047');
    await pm.onCheckOutPage().clickContinueInCheckOut();
    await pm.onCheckOutOverview().validatePageTitle();
    await pm.onCheckOutOverview().clickFinishButtonCheckOut();
    await pm.onCheckOutComplete().validatePageTitle();

})