import { Contract } from "@ethersproject/contracts";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import * as fs from "fs";
import { artifacts, ethers, network } from "hardhat";

// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  console.log(
    "Deploying the contracts with the account:",
    await deployer.getAddress()
  );

  console.log("Network name", network.name);
  console.log("Chain id", network.config.chainId);
  const verifySignatureAddress = await deployContract(
    deployer,
    "VerifySignature"
  );
  await deployContract(deployer, "DelegateOwnership", verifySignatureAddress);
}

async function deployContract(
  deployer: SignerWithAddress,
  name: string,
  ...params: string[]
) {
  console.log("Account balance:", (await deployer.getBalance()).toString());
  const contractFactory = await ethers.getContractFactory(name);
  const contract = await contractFactory.deploy(...params);
  await contract.deployed();
  console.log(`${name} address:`, contract.address);
  const sandboxContractsDir = __dirname + "/../frontend/src/contracts";
  saveFrontendFiles(sandboxContractsDir, contract, name);

  return contract.address;
}

function saveFrontendFiles(
  contractsDir: string,
  contract: Contract,
  contractName: string
) {
  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }
  saveABIs(contractName, contractsDir);

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify(
      {
        [contractName]: contract.address,
      },
      undefined,
      2
    )
  );
}

function saveABIs(contractName: string, contractsDir: string) {
  const ContractArtifact = artifacts.readArtifactSync(contractName);

  fs.writeFileSync(
    contractsDir + `/${contractName}.json`,
    JSON.stringify(ContractArtifact, null, 2)
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
