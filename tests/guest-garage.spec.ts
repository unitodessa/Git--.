import { test, expect } from '@playwright/test';

test('guest can add an Audi TT to Garage', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: /guest log in/i }).click();

  await page.getByRole('button', { name: 'Add car' }).click();
  await page.getByRole('combobox', { name: 'Brand' }).selectOption({ label: 'Audi' });
  await page.getByRole('combobox', { name: 'Model' }).selectOption({ label: 'TT' });
  await page.getByRole('spinbutton', { name: 'Mileage' }).fill('12000');
  await page.getByRole('button', { name: 'Add', exact: true }).click();

  await expect(page).toHaveURL(/panel\/garage/);
  await expect(page.getByText('Audi TT', { exact: true })).toBeVisible();
});
