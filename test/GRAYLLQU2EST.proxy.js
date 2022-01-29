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

  describe("Transactions", function() {
    it("Should transfer tokens between accounts", async function() {
      const [owner, addr1, addr2] = await ethers.getSigners();
  
      // Transfer 50 tokens from owner to addr1
      await grqv1.transfer(addr1.address, 50);
      expect(await grqv1.balanceOf(addr1.address)).to.equal(50);
  
      // Transfer 50 tokens from addr1 to addr2
      await grqv1.connect(addr1).transfer(addr2.address, 50);
      expect(await grqv1.balanceOf(addr2.address)).to.equal(50);
      expect(await grqv1.balanceOf(addr1.address)).to.equal(0);
    });
  });
  
});