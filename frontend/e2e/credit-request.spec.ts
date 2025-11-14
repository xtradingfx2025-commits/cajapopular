import { test, expect } from '@playwright/test';

test.describe('Caja Popular Credit Rating System', () => {
    test('should load the login page', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle('Sistema de Puntajes de Crédito');
    });
});
