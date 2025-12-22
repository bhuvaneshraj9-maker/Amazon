// import { test, expect } from '@playwright/test';

// test.describe('Basic Element Test', () => {

//   test('Validate Basic elements', async ({ page }) => {
//     // 1️⃣ Visit the page
//     await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

//     // 2️⃣ Select a radio button
//     await page.check('input[value="radio2"]');

//     // 3️⃣ Select multiple checkboxes
//     await page.check('input[value="option1"]');
//     await page.check('input[value="option2"]');

//     // 4️⃣ Verify checkboxes are checked
//     await expect(page.locator('input[value="option1"]')).toBeChecked();
//     await expect(page.locator('input[value="option2"]')).toBeChecked();

//     // 5️⃣ Select dropdown option
//     await page.selectOption('select', 'option2');
//     await expect(page.locator('select')).toHaveValue('option2');

//     // 6️⃣ Type in autocomplete box
//     await page.fill('#autocomplete', 'ind');

//     // 7️⃣ Handle autocomplete suggestion list
//     const options = page.locator('li.ui-menu-item div');
//     const count = await options.count();

//     for (let i = 0; i < count; i++) {
//       const text = await options.nth(i).textContent();
//       if (text.trim() === 'India') {
//         await options.nth(i).click();
//         break;
//       }
//     }

//     // ✅ Optional: Assertion to check India was selected
//     await expect(page.locator('#autocomplete')).toHaveValue('India');
//   });
// });
import { test, expect } from '@playwright/test'
test('Locators',async ({page})=>{
    await page.goto("https://www.demoblaze.com/")

    //click on login button  -property
    await page.locator('id=login2').click()

    //provide username  -css
    await page.locator('').fill()
})
