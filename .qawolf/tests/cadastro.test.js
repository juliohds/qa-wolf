const { launch } = require("qawolf");
const selectors = require("../selectors/cadastro");

describe('cadastro', () => {
  let browser;

  beforeAll(async () => {
    browser = await launch({ url: "https://stgaccounts.superbid.net/signup" });
  });

  afterAll(() => browser.close());

  it('can Tab', async () => {
    await browser.type(selectors[0], "↓Tab↑Tab");
  });

  it('can Enter', async () => {
    await browser.type(selectors[1], "↓Enter↑Enter");
  });

  it('can Tab', async () => {
    await browser.type(selectors[2], "↓Tab↑Tab");
  });

  it('can type into "secondaryPhone.number" input', async () => {
    await browser.type(selectors[3], "21321321321");
  });

  it('can Tab', async () => {
    await browser.type(selectors[4], "↓Tab↑Tab");
  });

  it('can Enter', async () => {
    await browser.type(selectors[5], "↓Enter↑Enter");
  });

  it('can Tab', async () => {
    await browser.type(selectors[6], "↓Tab↑Tab");
  });

  it('can type into "address.city" input', async () => {
    await browser.type(selectors[7], "fisdfjsdifjdi");
  });

  it('can Tab', async () => {
    await browser.type(selectors[8], "↓Tab↑Tab");
  });

  it('can type into "address.addressLine1" input', async () => {
    await browser.type(selectors[9], "djisfidjisfji");
  });

  it('can Tab', async () => {
    await browser.type(selectors[10], "↓Tab↑Tab");
  });

  it('can type into "address.number" input', async () => {
    await browser.type(selectors[11], "8545");
  });

  it('can Tab', async () => {
    await browser.type(selectors[12], "↓Tab↑Tab");
  });

  it('can type into "address.addressLine2" input', async () => {
    await browser.type(selectors[13], "dnsfjkfndsjkfsd");
  });

  it('can click "Prosseguir" button', async () => {
    await browser.click(selectors[14]);
  });

  it('can type into "fullName" input', async () => {
    await browser.type(selectors[15], "disfdisdjf");
  });

  it('can Tab', async () => {
    await browser.type(selectors[16], "↓Tab↑Tab");
  });

  it('can type into "id" input', async () => {
    await browser.type(selectors[17], "idjfsijfisdj");
  });

  it('can Tab', async () => {
    await browser.type(selectors[18], "↓Tab↑Tab");
  });

  it('can type into "email" input', async () => {
    await browser.type(selectors[19], "↓KeyH↑KeyH↓KeyU↑KeyU↓KeyH↓KeyU↑KeyH↑KeyU↓ShiftLeft↓Digit1↓Digit2↑Digit1↑Digit2↑ShiftLeft↓Backspace↑Backspace↓Backspace↑Backspace↓ShiftLeft↓Digit2↑ShiftLeft↑Digit2↓KeyG↑KeyG↓KeyM↑KeyM↓KeyA↓KeyI↑KeyA↑KeyI↓KeyL↑KeyL↓Period↑Period↓KeyC↓KeyO↑KeyC↑KeyO↓KeyM↑KeyM");
  });

  it('can Tab', async () => {
    await browser.type(selectors[20], "↓Tab↑Tab");
  });

  it('can type into "confirmEmail" input', async () => {
    await browser.type(selectors[21], "huhu@gmail.com");
  });

  it('can Tab', async () => {
    await browser.type(selectors[22], "↓Tab↑Tab");
  });

  it('can type into "nickname" input', async () => {
    await browser.type(selectors[23], "jdsifjidsjfi");
  });

  it('can Tab', async () => {
    await browser.type(selectors[24], "↓Tab↑Tab");
  });

  it('can type into "password" input', async () => {
    await browser.type(selectors[25], "↓ShiftLeft↓KeyT↑ShiftLeft↑KeyT↓KeyR↑KeyR↓KeyO↑KeyO↓Backspace↑Backspace↓Backspace↑Backspace↓Backspace↑Backspace↓ShiftLeft↓KeyT↑ShiftLeft↑KeyT↓KeyR↓KeyO↑KeyR↑KeyO↓KeyC↑KeyC↓KeyA↑KeyA↓KeyR↑KeyR↓ShiftLeft↓Digit2↑Digit2↑ShiftLeft↓Digit1↓Digit2↑Digit1↓Digit3↑Digit2↑Digit3");
  });

  it('can Tab', async () => {
    await browser.type(selectors[26], "↓Tab↑Tab");
  });

  it('can type into "birthday" input', async () => {
    await browser.type(selectors[27], "↓Digit0↑Digit0↓Digit2↓Digit3↑Digit2↑Digit3↓Digit0↑Digit0↓Digit2↓Digit0↓Digit3↑Digit0↑Digit2↑Digit3↓Digit0↓Digit3↑Digit0↓Digit2↑Digit3↑Digit2↓Digit0↑Digit0↓Backspace↑Backspace↓Backspace↑Backspace↓Backspace↑Backspace↓Backspace↑Backspace↓Digit1↑Digit1↓Digit9↑Digit9↓Digit9↑Digit9↓Digit0↑Digit0");
  });

  it('can Tab', async () => {
    await browser.type(selectors[28], "↓Tab↑Tab");
  });

  it('can Tab', async () => {
    await browser.type(selectors[29], "↓Tab↑Tab");
  });

  it('can Enter', async () => {
    await browser.type(selectors[30], "↓Enter↑Enter");
  });

  it('can Tab', async () => {
    await browser.type(selectors[31], "↓Tab↑Tab");
  });

  it('can type into "primaryPhone.number" input', async () => {
    await browser.type(selectors[32], "454848");
  });

  it('can scroll', async () => {
    await browser.scroll(selectors[33], { x: 0, y: 845 });
  });

  it('can Tab', async () => {
    await browser.type(selectors[34], "↓Tab↑Tab");
  });

  it('can Tab', async () => {
    await browser.type(selectors[35], "↓Tab↑Tab");
  });

  it('can Tab', async () => {
    await browser.type(selectors[36], "↓Tab↑Tab");
  });

  it('can Tab', async () => {
    await browser.type(selectors[37], "↓Tab↑Tab");
  });

  it('can Tab', async () => {
    await browser.type(selectors[38], "↓Tab↑Tab");
  });

  it('can Tab', async () => {
    await browser.type(selectors[39], "↓Tab↑Tab");
  });

  it('can Tab', async () => {
    await browser.type(selectors[40], "↓Tab↑Tab");
  });

  it('can Tab', async () => {
    await browser.type(selectors[41], "↓Tab↑Tab");
  });

  it('can Tab', async () => {
    await browser.type(selectors[42], "↓Tab↑Tab");
  });

  it('can Tab', async () => {
    await browser.type(selectors[43], "↓Tab↑Tab");
  });

  it('can Enter', async () => {
    await browser.type(selectors[44], "↓Enter↑Enter");
  });

  it('can scroll', async () => {
    await browser.scroll(selectors[45], { x: 0, y: 1118 });
  });

  it('can click "Prosseguir" button', async () => {
    await browser.click(selectors[46]);
  });

  it('can type into "fullName" input', async () => {
    await browser.type(selectors[47], " qwewe");
  });

  it('can scroll', async () => {
    await browser.scroll(selectors[48], { x: 0, y: 1118 });
  });

  it('can click "Prosseguir" button', async () => {
    await browser.click(selectors[49]);
  });

  it('can type into "birthday" input', async () => {
    await browser.type(selectors[50], "↓ArrowLeft↑ArrowLeft↓ArrowLeft↑ArrowLeft↓ArrowLeft↑ArrowLeft↓ArrowLeft↑ArrowLeft↓ArrowLeft↑ArrowLeft↓ArrowLeft↑ArrowLeft↓Backspace↑Backspace↓Delete↑Delete↓Digit3↓Digit2↑Digit3↓Digit3↑Digit2↑Digit3↓Backspace↑Backspace↓Backspace↑Backspace↓Backspace↑Backspace↓Digit1↓Digit2↑Digit1↑Digit2↓Backspace↑Backspace↓Backspace↑Backspace↓Digit0↑Digit0↓Digit1↓Digit2↑Digit1↑Digit2");
  });

  it('can scroll', async () => {
    await browser.scroll(selectors[51], { x: 0, y: 667 });
  });

  it('can type into "birthday" input', async () => {
    await browser.type(selectors[52], "↓Backspace↑Backspace↓Digit1↑Digit1");
  });

  it('can scroll', async () => {
    await browser.scroll(selectors[53], { x: 0, y: 1144 });
  });

  it('can click "Prosseguir" button', async () => {
    await browser.click(selectors[54]);
  });

  it('can scroll', async () => {
    await browser.scroll(selectors[55], { x: 0, y: 0 });
  });

  it('can click "Continuar" button', async () => {
    await browser.click(selectors[56]);
  });

  it('can click body', async () => {
    await browser.click(selectors[57]);
  });
});