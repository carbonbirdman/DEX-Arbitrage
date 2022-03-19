const hre = require("hardhat");
const fs = require("fs");
require("dotenv").config();

let config,arb,owner;
const network = hre.network.name;
if (network === 'aurora') config = require('./../config/aurora.json');
if (network === 'fantom') config = require('./../config/fantom.json');
if (network === 'hardhat') config = require('./../config/hardhat.json');

async function main() {
   [owner] = await ethers.getSigners();
   console.log(`Owner: ${owner.address}`);
  const contractName = 'Arb';
  await hre.run("compile");
  const smartContract = await hre.ethers.getContractFactory(contractName);
  const contract = await smartContract.deploy();
  await contract.deployed();
  console.log(`${contractName} deployed to: ${contract.address}`); 
  console.log('Put the above contract address into the .env file under arbContract');

  const asset = config.baseAssets[0];
  const interface = await ethers.getContractFactory('WETH9');
  const tokenAsset = await interface.attach(asset.address);
  const ownerBalance = await tokenAsset.balanceOf(owner.address);
  console.log(`${asset.sym} Owner Balance: `,ownerBalance.toString());

  const provider = new ethers.providers.Web3Provider(hre.network.provider);
  const balance = await provider.getBalance(owner.address);
  console.log(owner.address + ':' + ethers.utils.formatEther(balance));
  
  const IArb = await ethers.getContractFactory('Arb');
  arb = await IArb.attach(config.arbContract);
 //   console.log(arb);
  const arbBalance = await arb.getBalance(asset.address);
  console.log(`${asset.sym} Arb Balance: `,arbBalance.toString());

}


process.on('uncaughtException', function(err) {
	console.log('UnCaught Exception 83: ' + err);
	console.error(err.stack);
	fs.appendFile('./critical.txt', err.stack, function(){ });
});

process.on('unhandledRejection', (reason, p) => {
	console.log('Unhandled Rejection at: '+p+' - reason: '+reason);
});

main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
