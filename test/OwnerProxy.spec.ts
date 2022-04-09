import { ethers } from "hardhat";
import { OwnerProxy, OwnerProxy__factory, VerifySignature, VerifySignature__factory } from "../typechain-types";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("OwnerProxy", () => {
    let verifySignatureContract: VerifySignature;
    let ownerProxyContract: OwnerProxy;
    let owner: SignerWithAddress;
    let signer1: SignerWithAddress;
    let signer2: SignerWithAddress;

    beforeEach( async () => {
        [owner, signer1, signer2] = await ethers.getSigners()
        let verifySignatureFactory = new VerifySignature__factory(signer1);
        verifySignatureContract = await verifySignatureFactory.deploy();
        await verifySignatureContract.deployTransaction.wait();
        console.log(`VerifySignature address: ${verifySignatureContract.address}`);
        
        let ownerProxyContractFactory = new OwnerProxy__factory(signer1);
        ownerProxyContract = await ownerProxyContractFactory.deploy(verifySignatureContract.address);
        await verifySignatureContract.deployTransaction.wait();
        console.log(`OwnerProxy address: ${ownerProxyContract.address}`);

    })

    describe("set mapping", () => {
        it("fails if hot and cold wallet are the same", async () => {
            // given
            const hotWallet = signer1;
            const coldWallet = signer1.address;

            try {
                // when
                 await ownerProxyContract.connect(hotWallet).setMapping(coldWallet, []);
                expect(false).to.equal(true);
              } catch (e: any) {
                // then
                console.log(e.message);
                expect(e.message.includes("hot and cold wallets cannot be the same"));
              }
        })
    })
})