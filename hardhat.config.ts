import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";

import { HardhatUserConfig } from "hardhat/types";

const mainnetNodeUrl =
  "https://eth-mainnet.alchemyapi.io/v2/" + process.env.ALCHEMY_KEY;

const rinkebyNodeUrl =
  "https://eth-rinkeby.alchemyapi.io/v2/" + process.env.ALCHEMY_KEY;

const rinkebyDeployer = process.env.RINKEBY_DEPLOYER ?? "";
const mainnetDeployer = process.env.MAINNET_DEPLOYER ?? "";

let config: HardhatUserConfig = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
};

export default config;
