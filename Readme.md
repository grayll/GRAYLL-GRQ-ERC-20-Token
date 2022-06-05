Deployment Guide:

1. create `.env` to store these variables
```
ETH_PRIVATE_KEY=
ETHSCAN_KEY=
ALCHEMY_API_KEY_GOERLI=
ALCHEMY_API_KEY_MAINNET=
COINMARKETCAP_API_KEY=
```
1. run `npm i` to install npm modules
1. run `npx hardhat compile` to compile smart contracts
1. run `npx hardhat test` to run tests
1. run `npx hardhat run --network goerli scripts/1-deploy.js` to deploy to ethereum main network.
1. run `npx hardhat run --network mainnet scripts/1-deploy.js` to deploy to ethereum main network. More networks can be added in `hardhat.config`

Verification:
1. run ` npx hardhat verify <contract address> --network <network>`
