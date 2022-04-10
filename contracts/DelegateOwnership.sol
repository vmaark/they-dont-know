// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./VerifySignature.sol";

contract DelegateOwnership is VerifySignature {
    mapping(address => address) hotToColdWallets;
    mapping(address => address) coldToHotWallets;

    /**
    @param _coldWallet the _signer in the verified message
    @param _sig signature from personal_sign
     */
    function setMapping(address _coldWallet, bytes memory _sig) external {
        require(
            _coldWallet != msg.sender,
            "hot and cold wallets cannot be the same"
        );
        require(
            this.verify(_coldWallet, msg.sender, _sig),
            "invalid signature"
        );

        hotToColdWallets[msg.sender] = _coldWallet;
        coldToHotWallets[_coldWallet] = msg.sender;
    }

    function unsetMapping(address _coldWallet, bytes memory _sig) external {
        require(
            this.verify(_coldWallet, msg.sender, _sig),
            "invalid signature"
        );
        hotToColdWallets[msg.sender] = address(0);
        coldToHotWallets[_coldWallet] = address(0);
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
