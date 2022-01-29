/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config()

const {
  ETH_PRIVATE_KEY,
  ETHSCAN_KEY,
  ALCHEMY_API_KEY_GOERLI,
  ALCHEMY_API_KEY_MAINNET,
} = process.env;

module.exports = {
  solidity: "0.8.11",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY_GOERLI}`,
      accounts: [`${ETH_PRIVATE_KEY}`]
    },
    mainnet: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY_MAINNET}`,
      accounts: [`${ETH_PRIVATE_KEY}`]
    },
  },
  etherscan: {
    apiKey: ETHSCAN_KEY
  }
};
