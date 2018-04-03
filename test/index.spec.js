const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

describe('take screenshot', () => {
  let browser;

  beforeAll(async () => {
    browser = await puppeteer.launch();
  });

  it('html template example', async () => {
    const page = await browser.newPage();

    await page.goto('http://localhost:3031/index.html'); // Load aplication url

    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot();
  }, 15000);

  afterAll(async () => {
    await browser.close();
  });
});
