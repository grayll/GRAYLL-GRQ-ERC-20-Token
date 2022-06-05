const { ethers, upgrades } = require("hardhat");

async function main() {
  const [owner] = await ethers.getSigners();
  console.log(owner.address)
  const GRQv1 = await ethers.getContractFactory("GRAYLL");
  console.log("Deploying GRAYLL...");
  const grqv1 = await upgrades.deployProxy(GRQv1, [], { initializer: 'initialize', kind: "uups" });

  console.log("GRAYLL deployed to:", grqv1.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
