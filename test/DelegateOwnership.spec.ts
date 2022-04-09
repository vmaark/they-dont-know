import { ethers } from "hardhat";
import {
  DelegateOwnership,
  DelegateOwnership__factory,
  VerifySignature,
  VerifySignature__factory,
} from "../typechain-types";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("DelegateOwnership", () => {
  let verifySignatureContract: VerifySignature;
  let delegateOwnershipContract: DelegateOwnership;
  let owner: SignerWithAddress;
  let signer1: SignerWithAddress;
  let signer2: SignerWithAddress;
  let signer3: SignerWithAddress;

  beforeEach(async () => {
    [owner, signer1, signer2, signer3] = await ethers.getSigners();
    let verifySignatureFactory = new VerifySignature__factory(signer1);
    verifySignatureContract = await verifySignatureFactory.deploy();
    await verifySignatureContract.deployTransaction.wait();
    console.log(`VerifySignature address: ${verifySignatureContract.address}`);

    let delegateOwnershipContractFactory = new DelegateOwnership__factory(
      signer1
    );
    delegateOwnershipContract = await delegateOwnershipContractFactory.deploy(
      verifySignatureContract.address
    );
    await verifySignatureContract.deployTransaction.wait();
    console.log(
      `delegateOwnership address: ${delegateOwnershipContract.address}`
    );
  });

  describe("set mapping", () => {
    it("fails if hot and cold wallet are the same", async () => {
      // given
      const hotWallet = signer1;
      const coldWallet = signer1.address;

      try {
        // when
        await delegateOwnershipContract
          .connect(hotWallet)
          .setMapping(coldWallet, []);
        expect(false).to.equal(true);
      } catch (e: any) {
        // then
        expect(e.message.includes("hot and cold wallets cannot be the same"));
      }
    });

    it("fails if signature is incorrect", async () => {
      // given
      const hotWallet = signer1;
      const coldWallet = signer2;
      const messageHash = await verifySignatureContract
        .connect(signer2)
        .getMessageHash(hotWallet.address);
      const signature = await coldWallet.signMessage(
        ethers.utils.arrayify(messageHash)
      );

      try {
        // when
        await delegateOwnershipContract
          .connect(hotWallet)
          .setMapping(coldWallet.address, signature.replace("1", "2"));
        expect(false).to.equal(true);
      } catch (e: any) {
        // then
        expect(e.message.includes("invalid signature")).to.equal(true);
      }
    });
    it("succeeds if signature is correct", async () => {
      // given
      const hotWallet = signer1;
      const coldWallet = signer2;
      const messageHash = await verifySignatureContract
        .connect(signer2)
        .getMessageHash(hotWallet.address);
      const signature = await coldWallet.signMessage(
        ethers.utils.arrayify(messageHash)
      );

      // when
      await delegateOwnershipContract
        .connect(hotWallet)
        .setMapping(coldWallet.address, signature);

      // then
      expect(true).to.equal(true);
    });

    it("fails if signature is submitted with other wallet", async () => {
      // given
      const hotWallet = signer1;
      const coldWallet = signer2;
      const otherWallet = signer3;
      const messageHash = await verifySignatureContract
        .connect(signer2)
        .getMessageHash(hotWallet.address);
      const signature = await coldWallet.signMessage(
        ethers.utils.arrayify(messageHash)
      );

      try {
        // when
        await delegateOwnershipContract
          .connect(otherWallet)
          .setMapping(coldWallet.address, signature);
        expect(false).to.equal(true);
      } catch (e: any) {
        // then
        expect(e.message.includes("invalid signature")).to.equal(true);
      }
    });
  });
});
