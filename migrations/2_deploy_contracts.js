const AddressToken = artifacts.require('AddressToken');

module.exports = async function (deployer) {
    deployer.deploy(AddressToken);
};
