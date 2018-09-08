// @flow

import EVMRevert from './helpers/EVMRevert';

var ethUtils = require('ethereumjs-util');
require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(web3.BigNumber))
    .should();

const AddressDeployer = artifacts.require('AddressDeployer.sol');
const AddressToken = artifacts.require('AddressToken.sol');

var getDeterministicContractAddress = function (address, nonce = 0) {
    return '0x' + ethUtils.sha3(ethUtils.rlp.encode([address, nonce])).slice(12).toString('hex');
};

contract('AddressToken', function ([_, wallet1, wallet2, wallet3, wallet4, wallet5]) {
    let addressDeployer;
    let addressToken;

    beforeEach(async function () {
        addressDeployer = await AddressDeployer.new();
        var addressDeployerCode = await web3.eth.getCode(addressDeployer.address);
        var addressDeployerCodeHash = web3.sha3(addressDeployerCode, { encoding: 'hex' });

        addressToken = await AddressToken.new(addressDeployerCodeHash);
    });

    it('should mint properly', async function () {
        await addressDeployer.transferOwnershipAndNotify(addressToken.address);

        (await addressToken.balanceOf.call(_)).should.be.bignumber.equal(1);
        (await addressDeployer.owner.call()).should.be.equal(addressToken.address);
        (await addressToken.tokenOfOwnerByIndex.call(_, 0)).should.be.bignumber.equal(addressDeployer.address);
    });

    it('should not be able to mint twice', async function () {
        await addressDeployer.transferOwnershipAndNotify(addressToken.address);
        await addressDeployer.transferOwnershipAndNotify(addressToken.address).should.be.rejectedWith(EVMRevert);

        (await addressToken.balanceOf.call(_)).should.be.bignumber.equal(1);
        (await addressDeployer.owner.call()).should.be.equal(addressToken.address);
        (await addressToken.tokenOfOwnerByIndex.call(_, 0)).should.be.bignumber.equal(addressDeployer.address);
    });

    it('should calculate tokenURI properly', async function () {
        await addressDeployer.transferOwnershipAndNotify(addressToken.address);

        const expectedAddress = getDeterministicContractAddress(addressDeployer.address, 1);
        (await addressToken.tokenURI.call(addressDeployer.address)).should.be.equal('ethereum:' + expectedAddress);
    });

    it('should burn properly', async function () {
        await addressDeployer.transferOwnershipAndNotify(addressToken.address);
        await addressToken.burn(addressDeployer.address);

        (await addressToken.balanceOf.call(_)).should.be.bignumber.equal(0);
        (await addressDeployer.owner.call()).should.be.equal(_);
    });

    it('should re-mint properly', async function () {
        await addressDeployer.transferOwnershipAndNotify(addressToken.address);
        await addressToken.burn(addressDeployer.address);
        await addressDeployer.transferOwnershipAndNotify(addressToken.address);

        (await addressToken.balanceOf.call(_)).should.be.bignumber.equal(1);
        (await addressDeployer.owner.call()).should.be.equal(addressToken.address);
        (await addressToken.tokenOfOwnerByIndex.call(_, 0)).should.be.bignumber.equal(addressDeployer.address);
    });
});
