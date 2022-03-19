require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
        url: "https://apis.ankr.com/300a0d7f15fc4a01b79ff1bd778088d7/45614406b1e8e84a919cc03be771db24/fantom/full/main",
 */
module.exports = {
  networks: {
    hardhat: {
      accounts: [process.env.privateKey],
      chainId: 1337,
      forking: {
        url:"https://rpc.ftm.tools",
        chainId:1337,
      }
    },
    aurora: {
      url: `https://mainnet.aurora.dev`,
      accounts: [process.env.privateKey],
    },
    fantom: {
      url: `https://rpc.ftm.tools/`,
      accounts: [process.env.privateKey],
    },
  },
  solidity: {
    compilers: [
      { version: "0.8.7" },
      { version: "0.7.6" },
      { version: "0.6.6" }
    ]
  },
};
