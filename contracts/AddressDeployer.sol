pragma solidity ^0.4.24;


contract IAddressDeployerOwner {
    function ownershipTransferred(address _byWhom) public returns(bool);
}


contract AddressDeployer {
    address public owner = msg.sender;

    modifier onlyOwner {
        require(msg.sender == owner);
        _;
    }

    function transferOwnership(address _newOwner) public onlyOwner {
        owner = _newOwner;
    }

    function transferOwnershipAndNotify(IAddressDeployerOwner _newOwner) public onlyOwner {
        owner = _newOwner;
        require(_newOwner.ownershipTransferred(msg.sender));
    }

    function deploy(bytes _data) public onlyOwner {
        // solium-disable-next-line security/no-low-level-calls
        require(address(0).call(_data));
        selfdestruct(msg.sender);
    }
}
