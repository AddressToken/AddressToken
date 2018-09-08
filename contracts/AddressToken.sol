pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "./AddressDeployer.sol";


contract AddressToken is ERC721Full("AddressToken", "ATKN"), IAddressDeployerOwner {
    bytes32 public deployerHash;

    constructor(bytes32 _deployerHash) public {
        deployerHash = _deployerHash;
    }

    function ownershipTransferred(address _byWhom) public returns(bool) {
        mint(_byWhom);
        return true;
    }

    // Should be called by AddressDeployer smart contract
    function mint(address _beneficiary) public returns(bool) {
        require(deployerHash == keccak256(bytecodeAt(msg.sender)));
        _mint(_beneficiary, uint256(msg.sender));
        return true;
    }

    function burn(uint256 _tokenId) public returns(bool) {
        require(_isApprovedOrOwner(msg.sender, _tokenId));
        _burn(msg.sender, _tokenId);
        AddressDeployer(_tokenId).transferOwnership(msg.sender);
        return true;
    }

    function deploy(uint256 _tokenId, bytes _data) public returns(bool) {
        require(_isApprovedOrOwner(msg.sender, _tokenId));
        _burn(msg.sender, _tokenId);
        AddressDeployer(_tokenId).deploy(_data);
        return true;
    }

    function tokenURI(uint256 _tokenId) public view returns(string) {
        address destination = firstAddressFromDeployer(address(_tokenId));
        return addressToURI(destination);
    }

    // https://solidity.readthedocs.io/en/v0.4.24/assembly.html#example
    function bytecodeAt(address _addr) public view returns(bytes outCode) {
        // solium-disable-next-line security/no-inline-assembly
        assembly {
            // retrieve the size of the code, this needs assembly
            let size := extcodesize(_addr)
            // allocate output byte array - this could also be done without assembly
            // by using outCode = new bytes(size)
            outCode := mload(0x40)
            // new "memory end" including padding
            mstore(0x40, add(outCode, and(add(add(size, 0x20), 0x1f), not(0x1f))))
            // store length in memory
            mstore(outCode, size)
            // actually retrieve the code, this needs assembly
            extcodecopy(_addr, add(outCode, 0x20), 0, size)
        }
    }

    function addressToURI(address _addr) public pure returns(string) {
        bytes32 value = bytes32(uint256(_addr));
        bytes memory alphabet = "0123456789abcdef";
        
        bytes memory str = new bytes(51);
        str[0] = "e";
        str[1] = "t";
        str[2] = "h";
        str[3] = "e";
        str[4] = "r";
        str[5] = "e";
        str[6] = "u";
        str[7] = "m";
        str[8] = ":";
        str[9] = "0";
        str[10] = "x";
        for (uint i = 0; i < 20; i++) {
            str[11+i*2] = alphabet[uint(value[i + 12] >> 4)];
            str[12+i*2] = alphabet[uint(value[i + 12] & 0x0f)];
        }
        return string(str);
    }

    function firstAddressFromDeployer(address _deployer) public pure returns(address) {
        // solium-disable-next-line arg-overflow
        return address(keccak256(abi.encodePacked(byte(0xd6), byte(0x94), _deployer, byte(1))));
    }
}
