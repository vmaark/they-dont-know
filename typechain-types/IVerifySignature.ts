/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IVerifySignatureInterface extends utils.Interface {
  contractName: "IVerifySignature";
  functions: {
    "recover(bytes32,bytes)": FunctionFragment;
    "verify(address,address,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "recover",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verify",
    values: [string, string, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "recover", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {};
}

export interface IVerifySignature extends BaseContract {
  contractName: "IVerifySignature";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IVerifySignatureInterface;

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
    recover(
      _ethSignedMessageHash: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    verify(
      _signer: string,
      _hotWallet: string,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  recover(
    _ethSignedMessageHash: BytesLike,
    _sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  verify(
    _signer: string,
    _hotWallet: string,
    _sig: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    recover(
      _ethSignedMessageHash: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    verify(
      _signer: string,
      _hotWallet: string,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    recover(
      _ethSignedMessageHash: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verify(
      _signer: string,
      _hotWallet: string,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    recover(
      _ethSignedMessageHash: BytesLike,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verify(
      _signer: string,
      _hotWallet: string,
      _sig: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
