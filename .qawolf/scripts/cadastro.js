const { launch } = require("qawolf");
const selectors = require("../selectors/cadastro");

const cadastro = async () => {
  const browser = await launch({ url: "https://stgaccounts.superbid.net/signup" });
  // click "email" input
  await browser.click(selectors[0]);
  // type into "email" input
  await browser.type(selectors[1], "jsdufliasduiofds sdifdsjo");
  // Tab
  await browser.type(selectors[2], "↓Tab↑Tab");
  // click "Crie seu cadastro" div
  await browser.click(selectors[3]);
  await browser.close();
};

cadastro();