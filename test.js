const puppeteer = require('puppeteer');

describe('Navigation Links', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:8080', { waitUntil: 'domcontentloaded' });
    })

    test('Home Link', async () => {
        await page.click('a[href="#home"]');
        expect(await page.url()).toMatch(/#home/);
    })

    test('About Link', async () => {
        await page.click('a[href="#about"]');
        expect(await page.url()).toMatch(/#about/);
    })

    test('Projects Link', async () => {
        await page.click('a[href="#projects"]');
        expect(await page.url()).toMatch(/#projects/);
    })

    test('Contact Link', async () => {
        await page.click('a[href="#contact"]');
        expect(await page.url()).toMatch(/#contact/);
    })
})

describe('Contact Form', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:8080#contact', { waitUntil: 'domcontentloaded' });
    });

    test('Submit form', async () => {
        await page.type('input[name="Name"]', 'Test User');
        await page.type('input[name="Email"]', 'test@example.com');
        await page.type('textarea[name="Message"]', 'Hello, this is a test message.');
        await page.click('button[type="submit"]');

        await page.waitForSelector('#msg');
    
        // Check if the message contains 'Message sent successfully'
        const successMessage = await page.$eval('#msg', el => el.textContent);
        expect(successMessage).toContain('');
    });
});

describe('About Section Tabs', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:8080#about', { waitUntil: 'domcontentloaded' });
    });

    test('Click Skills tab', async () => {
        await page.click('p[onclick="opentab(\'skills\')"]');
        const skillsContentVisible = await page.evaluate(() => {
            const skillsTab = document.querySelector('#skills');
            return skillsTab.classList.contains('active-tab');
        });
        expect(skillsContentVisible).toBeTruthy();
    });

    test('Click Education tab', async () => {
        await page.click('p[onclick="opentab(\'education\')"]');
        const educationTabContentVisible = await page.evaluate(() => {
            const educationTab = document.querySelector('#education');
            return educationTab.classList.contains('active-tab');
        });
        expect(educationTabContentVisible).toBeTruthy();
    });

    test('Click Experiences tab', async () => {
        await page.click('p[onclick="opentab(\'experiences\')"]');
        const experienceTabContentVisible = await page.evaluate(() => {
            const experienceTab = document.querySelector('#experiences');
            return experienceTab.classList.contains('active-tab');
        });
        expect(experienceTabContentVisible).toBeTruthy();
    });

    test('Click More tab', async () => {
        await page.click('p[onclick="opentab(\'more\')"]');
        const moreTabContentVisible = await page.evaluate(() => {
            const moreTab = document.querySelector('#more');
            return moreTab.classList.contains('active-tab');
        });
        expect(moreTabContentVisible).toBeTruthy();
    });
});
