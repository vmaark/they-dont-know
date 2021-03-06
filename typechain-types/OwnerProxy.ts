/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface OwnerProxyInterface extends utils.Interface {
  contractName: "OwnerProxy";
  functions: {
    "balanceOf(address,address)": FunctionFragment;
    "ownerOf(address,uint256)": FunctionFragment;
    "setMapping(address,bytes)": FunctionFragment;
    "unsetMapping(address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "ownerOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMapping",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unsetMapping",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setMapping", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unsetMapping",
    data: BytesLike
  ): Result;

  events: {};
}

export interface OwnerProxy extends BaseContract {
  contractName: "OwnerProxy";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OwnerProxyInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balanceOf(
      contractAddress: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    ownerOf(
      contractAddress: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { owner: string }>;

    setMapping(
      _coldWallet: string,
      _sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unsetMapping(
      _coldWallet: string,
      _sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balanceOf(
    contractAddress: string,
    owner: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ownerOf(
    contractAddress: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  setMapping(
    _coldWallet: string,
    _sig: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unsetMapping(
    _coldWallet: string,
    _sig: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(
      contractAddress: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerOf(
      contractAddress: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    setMapping(
      _coldWallet: string,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    unsetMapping(
      _coldWallet: string,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    balanceOf(
      contractAddress: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ownerOf(
      contractAddress: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setMapping(
      _coldWallet: string,
      _sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unsetMapping(
      _coldWallet: string,
      _sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      contractAddress: string,
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ownerOf(
      contractAddress: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setMapping(
      _coldWallet: string,
      _sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unsetMapping(
      _coldWallet: string,
      _sig: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
