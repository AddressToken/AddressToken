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

    it('should deploy at desired address', async function () {
        await addressDeployer.transferOwnershipAndNotify(addressToken.address);

        const expectedAddress = getDeterministicContractAddress(addressDeployer.address, 1);
        const bytecode = '0x608060405260008054600160a060020a0319163317905534801561002257600080fd5b506102ff806100326000396000f3006080604052600436106100605763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166277436081146100655780638a3b9d37146100da5780638da5cb5b146100fd578063f2fde38b14610112575b600080fd5b34801561007157600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100be9436949293602493928401919081908401838280828437509497506101339650505050505050565b60408051600160a060020a039092168252519081900360200190f35b3480156100e657600080fd5b506100fb600160a060020a03600435166101aa565b005b34801561010957600080fd5b506100be61027e565b34801561011e57600080fd5b506100fb600160a060020a036004351661028d565b60008054600160a060020a0316331461014b57600080fd5b8151602083016000f09050600160a060020a038116151561016b57600080fd5b60408051600160a060020a038316815290517ff40fcec21964ffb566044d083b4073f29f7f7929110ea19e1b3ebe375d89055e9181900360200190a133ff5b600054600160a060020a031633146101c157600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383169081178255604080517fac9a252a0000000000000000000000000000000000000000000000000000000081523360048201529051919263ac9a252a926024808401936020939083900390910190829087803b15801561024457600080fd5b505af1158015610258573d6000803e3d6000fd5b505050506040513d602081101561026e57600080fd5b5051151561027b57600080fd5b50565b600054600160a060020a031681565b600054600160a060020a031633146102a457600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820212532eae11038deeaceab491b5154fc507f77d52ec6f4c7783c50ba568adc150029';
        const deployed = '0x6080604052600436106100605763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166277436081146100655780638a3b9d37146100da5780638da5cb5b146100fd578063f2fde38b14610112575b600080fd5b34801561007157600080fd5b506040805160206004803580820135601f81018490048402850184019095528484526100be9436949293602493928401919081908401838280828437509497506101339650505050505050565b60408051600160a060020a039092168252519081900360200190f35b3480156100e657600080fd5b506100fb600160a060020a03600435166101aa565b005b34801561010957600080fd5b506100be61027e565b34801561011e57600080fd5b506100fb600160a060020a036004351661028d565b60008054600160a060020a0316331461014b57600080fd5b8151602083016000f09050600160a060020a038116151561016b57600080fd5b60408051600160a060020a038316815290517ff40fcec21964ffb566044d083b4073f29f7f7929110ea19e1b3ebe375d89055e9181900360200190a133ff5b600054600160a060020a031633146101c157600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a0383169081178255604080517fac9a252a0000000000000000000000000000000000000000000000000000000081523360048201529051919263ac9a252a926024808401936020939083900390910190829087803b15801561024457600080fd5b505af1158015610258573d6000803e3d6000fd5b505050506040513d602081101561026e57600080fd5b5051151561027b57600080fd5b50565b600054600160a060020a031681565b600054600160a060020a031633146102a457600080fd5b6000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a72305820212532eae11038deeaceab491b5154fc507f77d52ec6f4c7783c50ba568adc150029';

        (await web3.eth.getCode(expectedAddress)).should.be.equal('0x0');
        await addressToken.deploy(addressDeployer.address, bytecode);
        (await web3.eth.getCode(expectedAddress)).should.be.equal(deployed);
    });
});
