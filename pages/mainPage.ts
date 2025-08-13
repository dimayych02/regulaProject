import { Locator, Page } from "@playwright/test";
import BasePage from "./basePage";

export default class MainPage extends BasePage {
    constructor(page: Page, url: string) {
        super(page, url);
    }
    
    public get buttonTryFaceLiveness(): Locator {
        const selector = "button[data-test=liveness-try-button]";
        return this.page.locator(selector);
    }

    public get buttonGo(): Locator {
        const selector = "button[data-e2e=get-ready]";
        return this.page.locator(selector);
    }

    public get faceHintRound(): Locator {
        const selector = 'div[class*=face-hint-round]';
        return this.page.locator(selector);
    }
}