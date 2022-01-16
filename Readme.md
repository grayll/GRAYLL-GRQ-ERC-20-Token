Deployment Guide:

1. create `.secret` and store seed mnemonic in that file
1. run `npm i` to install npm modules
1. run `truffle compile` to compile smart contracts
1. set mainnet gas price in `live` section `truffle-config.js`. Refer to https://etherscan.io/gastracker
1. run `truffle deploy --network live` to deploy to ethereum main network. More networks can be added in `truffle-config.js` from https://rpc.info/ if required.