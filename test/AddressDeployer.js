// // @flow

// // import EVMRevert from './helpers/EVMRevert';

// var ethUtils = require('ethereumjs-util');
// require('chai')
//     .use(require('chai-as-promised'))
//     .use(require('chai-bignumber')(web3.BigNumber))
//     .should();

// const AddressDeployer = artifacts.require('AddressDeployer.sol');

// var getDeterministicContractAddress = function(address, nonce = 0) {
//     return '0x' + ethUtils.sha3(ethUtils.rlp.encode([address, nonce])).slice(12).toString('hex');
// }

// contract('AddressDeployer', function ([_, wallet1, wallet2, wallet3, wallet4, wallet5]) {
//     let addressDeployer;

//     beforeEach(async function () {
//         addressDeployer = await AddressDeployer.new();
//     });

//     it('should deploy ad desired address', async function () {
//         const expectedAddress = getDeterministicContractAddress(addressDeployer.address, 1);

//         (await web3.eth.getCode(expectedAddress)).should.be.equal('0x0');
//         await addressDeployer.deploy('0x12345678');
//         (await web3.eth.getCode(expectedAddress)).should.be.equal('0x12345678');
//     });
// });
