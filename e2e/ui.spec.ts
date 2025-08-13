import { test } from "allure-playwright";
import MainPage from "../pages/mainPage";
import { config } from "../config";

let mainPage: MainPage;

test.beforeAll('Setup', async ({ browser }) => {
    const context = await browser.newContext({
        permissions: ['camera']
    });
    const page = await context.newPage();
    mainPage = new MainPage(page, `${config.baseURL}`);
})

test('Liveness detection', async () => {
    await mainPage.openPage();
    await mainPage.buttonTryFaceLiveness.click();
    await mainPage.buttonGo.click();
    await mainPage.faceHintRound.waitFor({ state: 'visible', timeout: 30000 });
})