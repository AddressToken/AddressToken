// @flow

// import EVMRevert from './helpers/EVMRevert';

require('chai')
    .use(require('chai-as-promised'))
    .use(require('chai-bignumber')(web3.BigNumber))
    .should();

// сonst AddressToken = artifacts.require('AddressToken.sol');

contract('AddressToken', function ([_, wallet1, wallet2, wallet3, wallet4, wallet5]) {
});
