const { expect } = require('chai');
 
let GRQv1;
let grqv1;
 
// Start test block
describe('GRAYLLQU2EST (proxy)', function () {
  beforeEach(async function () {
    GRQv1 = await ethers.getContractFactory("GRAYLLQU2EST");
    grqv1 = await upgrades.deployProxy(GRQv1, [], { initializer: 'initialize', kind: "uups" });

  });
 
  // Test case
  it('Should have 1000000000 tokens', async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    // console.log(grqv1)
    expect((await grqv1.totalSupply()).toString()).to.equal('1000000000000000000000000000');
    expect(await grqv1.name()).to.equal('GRAYLL QU2EST');
    expect(await grqv1.symbol()).to.equal('GRQ');
  });
});