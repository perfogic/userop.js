import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";
export type UserOperationStruct = {
    sender: string;
    nonce: BigNumberish;
    initCode: BytesLike;
    callData: BytesLike;
    callGasLimit: BigNumberish;
    verificationGasLimit: BigNumberish;
    preVerificationGas: BigNumberish;
    maxFeePerGas: BigNumberish;
    maxPriorityFeePerGas: BigNumberish;
    paymasterAndData: BytesLike;
    signature: BytesLike;
};
export type UserOperationStructOutput = [
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
] & {
    sender: string;
    nonce: BigNumber;
    initCode: string;
    callData: string;
    callGasLimit: BigNumber;
    verificationGasLimit: BigNumber;
    preVerificationGas: BigNumber;
    maxFeePerGas: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    paymasterAndData: string;
    signature: string;
};
export interface SimpleAccountInterface extends utils.Interface {
    functions: {
        "addDeposit()": FunctionFragment;
        "entryPoint()": FunctionFragment;
        "execute(address,uint256,bytes)": FunctionFragment;
        "executeBatch(address[],uint256[],bytes[])": FunctionFragment;
        "getDeposit()": FunctionFragment;
        "getNonce()": FunctionFragment;
        "initialize(address)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "owner()": FunctionFragment;
        "proxiableUUID()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "tokensReceived(address,address,address,uint256,bytes,bytes)": FunctionFragment;
        "upgradeTo(address)": FunctionFragment;
        "upgradeToAndCall(address,bytes)": FunctionFragment;
        "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
        "withdrawDepositTo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addDeposit" | "entryPoint" | "execute" | "executeBatch" | "getDeposit" | "getNonce" | "initialize" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "owner" | "proxiableUUID" | "supportsInterface" | "tokensReceived" | "upgradeTo" | "upgradeToAndCall" | "validateUserOp" | "withdrawDepositTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "addDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "entryPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeBatch", values: [string[], BigNumberish[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "getDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "initialize", values: [string]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "proxiableUUID", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "tokensReceived", values: [string, string, string, BigNumberish, BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
    encodeFunctionData(functionFragment: "upgradeToAndCall", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "validateUserOp", values: [UserOperationStruct, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "withdrawDepositTo", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "proxiableUUID", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokensReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "upgradeToAndCall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUserOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawDepositTo", data: BytesLike): Result;
    events: {
        "AdminChanged(address,address)": EventFragment;
        "BeaconUpgraded(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "SimpleAccountInitialized(address,address)": EventFragment;
        "Upgraded(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SimpleAccountInitialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}
export interface AdminChangedEventObject {
    previousAdmin: string;
    newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<[
    string,
    string
], AdminChangedEventObject>;
export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;
export interface BeaconUpgradedEventObject {
    beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<[
    string
], BeaconUpgradedEventObject>;
export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface SimpleAccountInitializedEventObject {
    entryPoint: string;
    owner: string;
}
export type SimpleAccountInitializedEvent = TypedEvent<[
    string,
    string
], SimpleAccountInitializedEventObject>;
export type SimpleAccountInitializedEventFilter = TypedEventFilter<SimpleAccountInitializedEvent>;
export interface UpgradedEventObject {
    implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;
export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;
export interface SimpleAccount extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SimpleAccountInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        addDeposit(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<[string]>;
        execute(dest: string, value: BigNumberish, func: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        executeBatch(dest: string[], value: BigNumberish[], func: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        getDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;
        getNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        initialize(anOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        proxiableUUID(overrides?: CallOverrides): Promise<[string]>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        tokensReceived(arg0: string, arg1: string, arg2: string, arg3: BigNumberish, arg4: BytesLike, arg5: BytesLike, overrides?: CallOverrides): Promise<[void]>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<ContractTransaction>;
    };
    addDeposit(overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    entryPoint(overrides?: CallOverrides): Promise<string>;
    execute(dest: string, value: BigNumberish, func: BytesLike, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    executeBatch(dest: string[], value: BigNumberish[], func: BytesLike[], overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
    getNonce(overrides?: CallOverrides): Promise<BigNumber>;
    initialize(anOwner: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
    onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
    onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
    owner(overrides?: CallOverrides): Promise<string>;
    proxiableUUID(overrides?: CallOverrides): Promise<string>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    tokensReceived(arg0: string, arg1: string, arg2: string, arg3: BigNumberish, arg4: BytesLike, arg5: BytesLike, overrides?: CallOverrides): Promise<void>;
    upgradeTo(newImplementation: string, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string;
    }): Promise<ContractTransaction>;
    callStatic: {
        addDeposit(overrides?: CallOverrides): Promise<void>;
        entryPoint(overrides?: CallOverrides): Promise<string>;
        execute(dest: string, value: BigNumberish, func: BytesLike, overrides?: CallOverrides): Promise<void>;
        executeBatch(dest: string[], value: BigNumberish[], func: BytesLike[], overrides?: CallOverrides): Promise<void>;
        getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        getNonce(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(anOwner: string, overrides?: CallOverrides): Promise<void>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        owner(overrides?: CallOverrides): Promise<string>;
        proxiableUUID(overrides?: CallOverrides): Promise<string>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        tokensReceived(arg0: string, arg1: string, arg2: string, arg3: BigNumberish, arg4: BytesLike, arg5: BytesLike, overrides?: CallOverrides): Promise<void>;
        upgradeTo(newImplementation: string, overrides?: CallOverrides): Promise<void>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminChanged(address,address)"(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        AdminChanged(previousAdmin?: null, newAdmin?: null): AdminChangedEventFilter;
        "BeaconUpgraded(address)"(beacon?: string | null): BeaconUpgradedEventFilter;
        BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "SimpleAccountInitialized(address,address)"(entryPoint?: string | null, owner?: string | null): SimpleAccountInitializedEventFilter;
        SimpleAccountInitialized(entryPoint?: string | null, owner?: string | null): SimpleAccountInitializedEventFilter;
        "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
        Upgraded(implementation?: string | null): UpgradedEventFilter;
    };
    estimateGas: {
        addDeposit(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        entryPoint(overrides?: CallOverrides): Promise<BigNumber>;
        execute(dest: string, value: BigNumberish, func: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        executeBatch(dest: string[], value: BigNumberish[], func: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        getNonce(overrides?: CallOverrides): Promise<BigNumber>;
        initialize(anOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        tokensReceived(arg0: string, arg1: string, arg2: string, arg3: BigNumberish, arg4: BytesLike, arg5: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<BigNumber>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addDeposit(overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(dest: string, value: BigNumberish, func: BytesLike, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        executeBatch(dest: string[], value: BigNumberish[], func: BytesLike[], overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        getDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(anOwner: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokensReceived(arg0: string, arg1: string, arg2: string, arg3: BigNumberish, arg4: BytesLike, arg5: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        upgradeTo(newImplementation: string, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        upgradeToAndCall(newImplementation: string, data: BytesLike, overrides?: PayableOverrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string;
        }): Promise<PopulatedTransaction>;
    };
}
