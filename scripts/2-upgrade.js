  // scripts/upgrade-box.js
const { ethers, upgrades } = require("hardhat");
const proxyAddress = '0xb664D4d802F9DFf1A7746f692BA46b6cE695a2e4';


async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  const box = await upgrades.upgradeProxy(proxyAddress, BoxV2);
  console.log("Box upgraded");
}

main();