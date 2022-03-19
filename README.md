# Simple Dex Arbitrage

This is a fork of James Bachini's code here

https://jamesbachini.com/dex-arbitrage/

The InstaArb contract has been removed, this is a simple simple version.
The search code has been removed from the smart contract - all evaluation is done in 
Javascript, the smart contract is dumb in the sense that it executes trades given addresses,
that's all.

## Disclaimer
Note the code is provided for educational purposes, is unaudited and not fit for financial transactions. Use it to experiment with and build your own strategies. A technical support call center is not available if you get funds stuck so make sure to test the recover.js script before doing anything else. Use on a testnet with play money or with funds you are willing to lose.

## Setup Instructions
Edit the .env-example.txt file and add a private key

Build using the following commands:

```shell
git clone https://github.com/jamesbachini/DEX-Arbitrage.git
cd DEX-Arbitrage
mv .env-example.txt .env
npm install
npx hardhat run --network aurora .\scripts\deploy.js
```

Then add the arbContract deployment address to config/aurora.json edit the base assets and move the funds across to the the arbContract address.

Then to execute run:-

```shell
npx hardhat run --network hardhat ./scripts/deploy.js
```

Finally to recover any funds use the script.

```shell
npx hardhat run --network aurora .\scripts\recover.js
```

More info and solidity tutorials on my blog at https://jamesbachini.com
