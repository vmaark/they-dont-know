/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OwnerProxy, OwnerProxyInterface } from "../OwnerProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_verifySignature",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_coldWallet",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_sig",
        type: "bytes",
      },
    ],
    name: "setMapping",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_coldWallet",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_sig",
        type: "bytes",
      },
    ],
    name: "unsetMapping",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200112a3803806200112a8339818101604052810190620000379190620000e9565b80600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200011b565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000b18262000084565b9050919050565b620000c381620000a4565b8114620000cf57600080fd5b50565b600081519050620000e381620000b8565b92915050565b6000602082840312156200010257620001016200007f565b5b60006200011284828501620000d2565b91505092915050565b610fff806200012b6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631f29d2dc146100515780632f7dd597146100815780635430bd921461009d578063f7888aec146100b9575b600080fd5b61006b6004803603810190610066919061099c565b6100e9565b60405161007891906109eb565b60405180910390f35b61009b60048036038101906100969190610b4c565b610213565b005b6100b760048036038101906100b29190610b4c565b6103f3565b005b6100d360048036038101906100ce9190610ba8565b6106be565b6040516100e09190610bf7565b60405180910390f35b6000808373ffffffffffffffffffffffffffffffffffffffff16636352211e846040518263ffffffff1660e01b81526004016101259190610bf7565b602060405180830381865afa158015610142573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101669190610c27565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156102075781610209565b805b9250505092915050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342920a468333846040518463ffffffff1660e01b815260040161027293929190610cdc565b602060405180830381865afa15801561028f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102b39190610d52565b6102f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e990610ddc565b60405180910390fd5b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6104326040518060400160405280600a81526020017f6d73672e73656e646572000000000000000000000000000000000000000000008152503361082f565b6104716040518060400160405280600b81526020017f5f636f6c6457616c6c65740000000000000000000000000000000000000000008152508361082f565b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156104e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104d790610e6e565b60405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166342920a468333846040518463ffffffff1660e01b815260040161053f93929190610cdc565b602060405180830381865afa15801561055c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105809190610d52565b6105bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105b690610ddc565b60405180910390fd5b816000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505050565b6000808373ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b81526004016106fa91906109eb565b602060405180830381865afa158015610717573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061073b9190610ea3565b905060008473ffffffffffffffffffffffffffffffffffffffff166370a082316000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166040518263ffffffff1660e01b81526004016107d691906109eb565b602060405180830381865afa1580156107f3573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108179190610ea3565b905080826108259190610eff565b9250505092915050565b6108c78282604051602401610845929190610f99565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506108cb565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061093382610908565b9050919050565b61094381610928565b811461094e57600080fd5b50565b6000813590506109608161093a565b92915050565b6000819050919050565b61097981610966565b811461098457600080fd5b50565b60008135905061099681610970565b92915050565b600080604083850312156109b3576109b26108fe565b5b60006109c185828601610951565b92505060206109d285828601610987565b9150509250929050565b6109e581610928565b82525050565b6000602082019050610a0060008301846109dc565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610a5982610a10565b810181811067ffffffffffffffff82111715610a7857610a77610a21565b5b80604052505050565b6000610a8b6108f4565b9050610a978282610a50565b919050565b600067ffffffffffffffff821115610ab757610ab6610a21565b5b610ac082610a10565b9050602081019050919050565b82818337600083830152505050565b6000610aef610aea84610a9c565b610a81565b905082815260208101848484011115610b0b57610b0a610a0b565b5b610b16848285610acd565b509392505050565b600082601f830112610b3357610b32610a06565b5b8135610b43848260208601610adc565b91505092915050565b60008060408385031215610b6357610b626108fe565b5b6000610b7185828601610951565b925050602083013567ffffffffffffffff811115610b9257610b91610903565b5b610b9e85828601610b1e565b9150509250929050565b60008060408385031215610bbf57610bbe6108fe565b5b6000610bcd85828601610951565b9250506020610bde85828601610951565b9150509250929050565b610bf181610966565b82525050565b6000602082019050610c0c6000830184610be8565b92915050565b600081519050610c218161093a565b92915050565b600060208284031215610c3d57610c3c6108fe565b5b6000610c4b84828501610c12565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c8e578082015181840152602081019050610c73565b83811115610c9d576000848401525b50505050565b6000610cae82610c54565b610cb88185610c5f565b9350610cc8818560208601610c70565b610cd181610a10565b840191505092915050565b6000606082019050610cf160008301866109dc565b610cfe60208301856109dc565b8181036040830152610d108184610ca3565b9050949350505050565b60008115159050919050565b610d2f81610d1a565b8114610d3a57600080fd5b50565b600081519050610d4c81610d26565b92915050565b600060208284031215610d6857610d676108fe565b5b6000610d7684828501610d3d565b91505092915050565b600082825260208201905092915050565b7f696e76616c6964207369676e6174757265000000000000000000000000000000600082015250565b6000610dc6601183610d7f565b9150610dd182610d90565b602082019050919050565b60006020820190508181036000830152610df581610db9565b9050919050565b7f686f7420616e6420636f6c642077616c6c6574732063616e6e6f74206265207460008201527f68652073616d6500000000000000000000000000000000000000000000000000602082015250565b6000610e58602783610d7f565b9150610e6382610dfc565b604082019050919050565b60006020820190508181036000830152610e8781610e4b565b9050919050565b600081519050610e9d81610970565b92915050565b600060208284031215610eb957610eb86108fe565b5b6000610ec784828501610e8e565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610f0a82610966565b9150610f1583610966565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f4a57610f49610ed0565b5b828201905092915050565b600081519050919050565b6000610f6b82610f55565b610f758185610d7f565b9350610f85818560208601610c70565b610f8e81610a10565b840191505092915050565b60006040820190508181036000830152610fb38185610f60565b9050610fc260208301846109dc565b939250505056fea26469706673582212205322f2e7af3cb9c3993a21b5bbc53cb1b1d4780c966c1a047ba597f039838b1564736f6c634300080a0033";

type OwnerProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OwnerProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OwnerProxy__factory extends ContractFactory {
  constructor(...args: OwnerProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "OwnerProxy";
  }

  deploy(
    _verifySignature: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OwnerProxy> {
    return super.deploy(
      _verifySignature,
      overrides || {}
    ) as Promise<OwnerProxy>;
  }
  getDeployTransaction(
    _verifySignature: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_verifySignature, overrides || {});
  }
  attach(address: string): OwnerProxy {
    return super.attach(address) as OwnerProxy;
  }
  connect(signer: Signer): OwnerProxy__factory {
    return super.connect(signer) as OwnerProxy__factory;
  }
  static readonly contractName: "OwnerProxy";
  public readonly contractName: "OwnerProxy";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OwnerProxyInterface {
    return new utils.Interface(_abi) as OwnerProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnerProxy {
    return new Contract(address, _abi, signerOrProvider) as OwnerProxy;
  }
}
