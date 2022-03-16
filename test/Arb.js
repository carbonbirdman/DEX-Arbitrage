const { expect } = require("chai");
const kconfig = require("config/kestrel_config.js");

describe("Arb contract", function () {
  it("some test condition", async function () {
    const [owner] = await ethers.getSigners();

    const Arb = await ethers.getContractFactory("Arb");

    const hardhatArb = await Arb.deploy();
    const token_address = kconfig.token_address["LQDR"];

    const ownerBalance = await hardhatArb.getBalance(token_address);
    //const nothing = hardhatArb.recoverTokens(token_address);
    //const nothing = hardhatArb.recoverEth();

    //expect(await hardhatARb.totalSupply()).to.equal(ownerBalance);
  });
});