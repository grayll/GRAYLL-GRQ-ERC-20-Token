// migrations/3_deploy_upgradeable_box.js
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const GRQv1 = artifacts.require('GRAYLLQU2EST');

module.exports = async function (deployer) {
  await deployProxy(GRQv1, [], { deployer, initializer: 'initialize' });
};