const { ethers, upgrades } = require("hardhat");

async function main() {
  const GRQv1 = await ethers.getContractFactory("GRAYLLQU2EST");
  console.log("Deploying GRAYLLQU2EST...");
  const grqv1 = await upgrades.deployProxy(GRQv1, [], { initializer: 'initialize', kind: "uups" });

  console.log("GRAYLLQU2EST deployed to:", grqv1.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
