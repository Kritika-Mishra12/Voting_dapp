require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers");


module.exports = {
  paths:{
    artifacts: "./src/artifacts",
  },
  networks: {
    testnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      chainId: 97,
      accounts: ['']  //Add your private key
    },
  },
  etherscan: {
    apiKey: '57DMV4S566MEYC23CX6UT3X32NZ9W4IMP2'
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      "viaIR": true,
    }
  },
};