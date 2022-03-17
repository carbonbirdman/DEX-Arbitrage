const { expect } = require("chai");
const kconfig = require("../config/kestrel_config.js");

describe("Arb contract", function () {

    let Arb;
    let hardhatArb;
    let owner;
    let addr1;
    let amount_out;

  beforeEach(async function(){
    [owner, addr1, addr2] = await ethers.getSigners();
    Arb = await ethers.getContractFactory("Arb");
    hardhatArb = await Arb.deploy();
  });

  describe("Deployment", function(){

      it("Should have the right owner", async function(){
          expect(await hardhatArb.owner()).to.equal(owner.address);
      });

    //insert another test here
  }); //end Deployment
  
  describe("Swap", function(){
      it("Should get the expected output for a swap", async function(){
           const token0_address = kconfig.token_address["FTM"];
           const token1_address = kconfig.token_address["LQDR"];
           const router_address = kconfig.router_address["spooky"];
           const input_amount = ethers.utils.parseUnits("1", 18);

        amount_out = await hardhatArb.getAmountOutMin(router_address, token0_address, token1_address, input_amount);
        min_amount = ethers.utils.parseUnits("0.05", 18).toFixed();
        expect(amount_out).to.be.at.least(min_amount);

      });//it


    //  it("Should do a simple trade", async function(){
     //   await hardhatArb.swap()
//
  }); //swap


});//end Arb contract

  //it("some test condition", async function () {
   
    //const token_address = kconfig.token_address["LQDR"];

    //const ownerBalance = await hardhatArb.getBalance(token_address);
    //const nothing = hardhatArb.recoverTokens(token_address);
    //const nothing = hardhatArb.recoverEth();

    //expect(await hardhatARb.totalSupply()).to.equal(ownerBalance);
 // });
//});



