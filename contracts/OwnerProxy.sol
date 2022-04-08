// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

interface IVerifySignature {
    function verify(
        address _signer,
        address _hotWallet,
        bytes memory _sig
    ) external pure returns (bool);

    function recover(bytes32 _ethSignedMessageHash, bytes memory _sig)
        external
        pure
        returns (address);
}

contract OwnerProxy {
    mapping(address => address) hotToColdWallets;
    mapping(address => address) coldToHotWallets;

    function setColdWallet(address coldWallet) external {
        hotToColdWallets[msg.sender] = coldWallet;
    }

    function balanceOf(address contractAddress, address owner)
        external
        view
        returns (uint256 balance)
    {
        return IERC721(contractAddress).balanceOf(hotToColdWallets[owner]);
    }

    function ownerOf(address contractAddress, uint256 tokenId)
        external
        view
        returns (address owner)
    {
        return coldToHotWallets[IERC721(contractAddress).ownerOf(tokenId)];
    }
}
