const AddressToken = artifacts.require('AddressToken');
const AddressDeployer = artifacts.require('AddressDeployer');

module.exports = async function (deployer) {
    await deployer.deploy(AddressDeployer);
    let addressDeployer = await AddressDeployer.deployed();
    var addressDeployerCode = await web3.eth.getCode(addressDeployer.address);
    var addressDeployerCodeHash = web3.sha3(addressDeployerCode, { encoding: 'hex' });

    deployer.deploy(AddressToken, addressDeployerCodeHash);
};
