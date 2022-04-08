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

    function setMapping(address coldWallet) external {
        require(
            coldWallet != msg.sender,
            "hot and cold wallets cannot be the same"
        );

        hotToColdWallets[msg.sender] = coldWallet;
        coldToHotWallets[coldWallet] = msg.sender;
    }

    function unsetMapping(address coldWallet) external {
        hotToColdWallets[msg.sender] = address(0);
        coldToHotWallets[coldWallet] = address(0);
    }

    function balanceOf(address contractAddress, address owner)
        external
        view
        returns (uint256 balance)
    {
        uint256 hotBalance = IERC721(contractAddress).balanceOf(owner);
        uint256 coldBalance = IERC721(contractAddress).balanceOf(
            hotToColdWallets[owner]
        );

        return hotBalance + coldBalance;
    }

    function ownerOf(address contractAddress, uint256 tokenId)
        external
        view
        returns (address owner)
    {
        address realOwner = IERC721(contractAddress).ownerOf(tokenId);
        address authorizedOwner = coldToHotWallets[realOwner];
        return authorizedOwner != address(0) ? authorizedOwner : realOwner;
    }
}
