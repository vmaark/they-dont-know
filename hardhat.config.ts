import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "hardhat-gas-reporter";

import { HardhatUserConfig } from "hardhat/types";

const rinkebyNodeUrl =
  "https://eth-rinkeby.alchemyapi.io/v2/" + process.env.ALCHEMY_KEY;

const rinkebyDeployer = process.env.RINKEBY_DEPLOYER ?? "";
const mainnetDeployer = process.env.MAINNET_DEPLOYER ?? "";
const etherscan = process.env.ETHERSCAN ?? "";

let config: HardhatUserConfig = {
  solidity: "0.8.10",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    rinkeby: {
      url: rinkebyNodeUrl,
      accounts: [rinkebyDeployer],
    },
  },
  etherscan: {
    apiKey: etherscan,
  },
};

export default config;
